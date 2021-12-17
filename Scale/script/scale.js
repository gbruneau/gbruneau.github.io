'use strict';

import { t9nTranslation, t9nLabel } from './t9n.js';

class Unit {
    constructor(aSizeInMeter, aT9nLabel) {
        this.UnitSymbol = aT9nLabel;
        this.SizeInMeter = aSizeInMeter;
    }
    getUnitSymbol(aLang) {
        return this.UnitSymbol.Label(aLang);
    }
}

class Units {
    constructor() {
        this.UnitList = [];
    }
    addUnit(aSizeInMeter, at9nLabel) {
        let newUnit = new Unit(aSizeInMeter, at9nLabel);
        this.UnitList.push(newUnit);
    }
    getBestUnit(aSizeInMeter) {
        var bestUnit = this.UnitList[0];
        for (var u = 0; u < this.UnitList.length; u++) {
            if (Math.log10(this.UnitList[u].SizeInMeter) <= Math.log10(aSizeInMeter))
                bestUnit = this.UnitList[u];
        }
        return bestUnit;
    }
    sortBySize() {
        /* Sort from large to small */
        this.UnitList.sort(function (a, b) {
            if (a.SizeInMeter < b.SizeInMeter) {
                return -1;
            }
            if (a.SizeInMeter > b.SizeInMeter) {
                return 1;
            }
            return 0;
        });
    }
}


class ScaleObject {
    #Unit;
    #Labelt9n;
    constructor(objectJson, refUnits) {
        var newLabel = new t9nLabel([
            ["FR", objectJson.ObjectFr],
            ["EN", objectJson.ObjectEn]
        ]);
        this.#Labelt9n = newLabel;
        this.SizeInMeter = objectJson.SizeInMeter;
        this.URL = objectJson.URL;
        this.#Unit = refUnits.getBestUnit(this.SizeInMeter);
        this.SizeInUnit = this.SizeInMeter / this.#Unit.SizeInMeter;
    }
    getObjectName(aLang) {
        return this.#Labelt9n.Label(aLang);
    }
    getUnitSymbol(aLang) {
        return this.#Unit.getUnitSymbol(aLang);
    }
}

class ScaleObjects {
    constructor(refUnits) {
        this.ObjectList = [];
        this.Units = refUnits;
    }
    addObject(objectJson) {
        var newObj = new ScaleObject(objectJson, this.Units)
        this.ObjectList.push(newObj);
    }
    sortBySize() {
        this.ObjectList.sort(function (a, b) {
            if (a.SizeInMeter < b.SizeInMeter) {
                return -1;
            }
            if (a.SizeInMeter > b.SizeInMeter) {
                return 1;
            }
            return 0;
        });
    }
    sortByName(aLang) {
        this.ObjectList.sort(function (a, b) {
            var nameA = a.getObjectName(aLang).toUpperCase();
            var nameB = b.getObjectName(aLang).toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
    getObjectByName(aName, aLang) {
        var r = -1;
        var curName;
        for (var i = 0; i < this.ObjectList.length; i++) {
            curName = this.ObjectList[i].getObjectName(aLang);
            if (curName == aName) {
                r = i;
            }
        }
        return this.ObjectList[r];
    }

    getObjectBySize(aSizeInMeter) {
        const tolerance = 0.1;
        var minSize = aSizeInMeter * (1 - tolerance);
        var maxSize = aSizeInMeter * (1 + tolerance);
        var i;
        var curObj;
        var resObject;
        for (i = 0; i < this.ObjectList.length; i++) {
            curObj = this.ObjectList[i];
            if ((curObj.SizeInMeter >= minSize)
                && (curObj.SizeInMeter <= maxSize)
            ) {
                resObject = curObj;
            }
        }
        return resObject;
    }
    getNameList(aLang) {
        var nameList = [];
        this.sortByName(aLang);
        for (var i = 0; i < this.ObjectList.length; i++) {
            nameList.push(this.ObjectList[i].getObjectName(aLang));
        }
        return nameList;
    }
}

// Get all objects from JASON 
function readObjects(aList, url) {
    return $.getJSON(url, function (data) {
        $.each(data.ObjectList, function () {
            aList.addObject(this);
        })
    });
}

// Get all label from JASON 
// the custom property data-label is used
function readLabels(langs, url) {
    return $.getJSON(url, function (lData) {
        $.each(lData.Labels, function () {
            var newLabel = new t9nLabel(
                [
                    ["EN", this.LabelEn],
                    ["FR", this.LabelFr]
                ]);
            langs.addLabel(this.id, newLabel);
        });
    });
}


// Get all units from JASON 
function readUnits(aList, url) {
    return $.getJSON(url, function (uData) {
        // Fill the array
        $.each(uData.Units, function () {
            var newLabel = new t9nLabel(
                [
                    ["FR", this.UnitSymbolFr],
                    ["EN", this.UnitSymbolEn]
                ]);
            aList.addUnit(this.SizeInMeter, newLabel);
        });
    });
}


$(document).ready(function () {

    // ============ MAIN =========
    // Constantes
    const objectsURL = "./Data/Objects.JSON";
    const labelURL = "./Data/i18n.JSON";
    const unitURL = "./Data/Units.JSON";

    // Variables globales
    var unitList = new Units();
    var languages = new t9nTranslation(["EN", "FR"]);
    var objList;
    var reqUnit = readUnits(unitList, unitURL);

    function refreshTable() {
        objList.sortBySize();
        var ob1Name = $("#obj1").val();
        var ob2Name = $("#obj2").val();
        var i;
        var ratioText;
        var curName, ratioText, curSize, curUnitSymbol, curObj, curSizeInUnit, curURL;
        var scaledSize, scaledUnit, scaledUnitSymbol, scaledSizeInUnit;
        var curClass, curMagnitudeObjName, curRowHtml;
        var curMagnitudeObjName, curMagnitudeObj;

        var curLang = languages.CurLang;
        if (ob1Name != "" & ob2Name != "") {
            let obj1 = objList.getObjectByName(ob1Name, curLang);
            let obj2 = objList.getObjectByName(ob2Name, curLang);
            var ratio = obj2.SizeInMeter / obj1.SizeInMeter;
            if (ratio < 1)
                ratioText = "🠗  1 : " + (1 / ratio).toPrecision(4);
            else
                ratioText = "🠕  " + ratio.toPrecision(4) + " : 1";

            $("#fldRatio").text(ratioText);
            $("tbody").remove();

            var htmlRowTemplate = "<tr>"
                + "<td data-label='" + languages.getLabel(6) + "'><a href='%ur' target='_blank'>%na</a></td>"
                + "<td data-label='" + languages.getLabel(9) + "'>%m</td>"
                + "<td data-label='" + languages.getLabel(7) + "'>%si</td>"
                + "<td data-label='" + languages.getLabel(8) + "'>%sc</td>"
                + "<td data-label='" + languages.getLabel(10) + "'>%on</td>"
                + "</tr>";
            var oldClass = 'scMicro';

            var htmlTableBody = "";

            for (var i = 0; i < objList.ObjectList.length; i++) {
                curObj = objList.ObjectList[i];
                curName = curObj.getObjectName(curLang);
                curSize = curObj.SizeInMeter;
                curUnitSymbol = curObj.getUnitSymbol(curLang);
                curSizeInUnit = curObj.SizeInUnit;
                curURL = curObj.URL;

                scaledSize = curSize * ratio;
                scaledUnit = objList.Units.getBestUnit(scaledSize);
                scaledUnitSymbol = scaledUnit.getUnitSymbol(curLang);
                scaledSizeInUnit = scaledSize / scaledUnit.SizeInMeter;

                // Buil the HTML statement

                if (curSize <= 0.0001)
                    curClass = 'scMicro'
                else if (curSize <= 100)
                    curClass = 'scHuman'
                else if (curSize <= 1.2e+7)
                    curClass = 'scTravel'
                else if (curSize <= 1e+10)
                    curClass = 'scPlanet'
                else if (curSize <= 1e+13)
                    curClass = 'scSolar'
                else
                    curClass = 'scCosmic'


                if (i == 0)
                    curRowHtml = "<tbody class='" + oldClass + "'>" + htmlRowTemplate
                else
                    if (curClass != oldClass) {
                        curRowHtml = "</tbody><tbody class='" + curClass + "'>" + htmlRowTemplate
                        oldClass = curClass;
                    }
                    else
                        curRowHtml = htmlRowTemplate

                curMagnitudeObj = objList.getObjectBySize(scaledSize);
                if (curMagnitudeObj != null)
                    curMagnitudeObjName = curMagnitudeObj.getObjectName(curLang);
                else
                    curMagnitudeObjName = "";


                curRowHtml = curRowHtml.replace("%na", curName);
                curRowHtml = curRowHtml.replace("%si", curSizeInUnit.toPrecision(4) + " " + curUnitSymbol);
                curRowHtml = curRowHtml.replace("%sc", scaledSizeInUnit.toPrecision(4) + " " + scaledUnitSymbol);
                curRowHtml = curRowHtml.replace("%ur", curURL);
                curRowHtml = curRowHtml.replace("%m", curSize.toPrecision(4) + " m");
                curRowHtml = curRowHtml.replace("%cl", curClass);
                curRowHtml = curRowHtml.replace("%on", curMagnitudeObjName);

                if (i + 1 == objList.length)
                    curRowHtml += "</tbody>"
                htmlTableBody += curRowHtml;
            }
            $("tfoot").before(htmlTableBody);
        }
    }


    function refreshLabels() {
        languages.CurLang = $("#lang").val();
        var curLang = languages.CurLang;
        var oList;
        oList = objList.getNameList(curLang);
        $(function () {
            $("#obj1").autocomplete({
                source: oList
            });
            $("#obj2").autocomplete({
                source: oList
            });
        });

        $("[data-label-id]").each(function () {
            var id = parseInt($(this).attr("data-label-id"));
            var label = languages.getLabel(id);
            $(this).text(label);
        })
    }

    function fillLangList() {
        /* Fill the language drop down */
        for (var i = 0; i < languages.SupportedLanguages.length; i++) {
            var optName = languages.SupportedLanguages[i];
            var html = "<option value='" + optName + "'>" + optName + "</option>";
            $("#lang").append(html);
        }
        $("#lang").val(languages.CurLang);
    }


    reqUnit.done(function () {
        unitList.sortBySize();
        var reqLabel = readLabels(languages, labelURL);
        reqLabel.done(function () {
            objList = new ScaleObjects(unitList);
            var reqObject = readObjects(objList, objectsURL);
            reqObject.done(function () {
                fillLangList();
                refreshLabels();
                $("#lang").on("change", function () {
                    refreshLabels();
                });
                $("#obj1,#obj2").on("change", function () {
                    refreshTable();
                });

            });
        });
    });

});

