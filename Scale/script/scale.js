     // Constantes
     objectsURL = "./Data/Objects.JSON";
     labelURL = "./Data/i18n.JSON";
     unitURL = "./Data/Units.JSON";

     supportedLanguages=["EN","FR"];
     fallbackLanguage="EN";
      

     // Variables globales
     var objList = [];
     var objNameList = [];
     var unitList=[];
     var labelList=[];
     var myLang = getLang();

    myLang = "FR"; // Force french

     function getLang() {
         var r=fallbackLanguage;
         l=navigator.language.split("-")[0].toUpperCase();
         for (i = 0; i < supportedLanguages.length; i++) 
             if (supportedLanguages[i]==l)
                r=l;  
         return r;
     }


     function sortListByName(aList) {
         aList.sort(function (a, b) {
             var nameA = (myLang == "FR" ? a.ObjectFr : a.ObjectEn).toUpperCase();
             var nameB = (myLang == "FR" ? b.ObjectFr : b.ObjectEn).toUpperCase();
             if (nameA < nameB) {
                 return -1;
             }
             if (nameA > nameB) {
                 return 1;
             }
             return 0;
         });
     }

     function sortListBySize(aList) {
         aList.sort(function (a, b) {
             if (a.SizeInMeter < b.SizeInMeter) {
                 return -1;
             }
             if (a.SizeInMeter > b.SizeInMeter) {
                 return 1;
             }
             return 0;
         });
     }




     // Get all objects from JASON 
     function readObjects() {
         $.getJSON(objectsURL, function (data) {
             // Fill the array
             $.each(data.ObjectList, function () {
                 objList.push(this);
             })
             sortListByName(objList);
             for (i = 0; i < objList.length; i++)
                 objNameList.push(getObjectName(i));
         });
     }

     // Get all label from JASON 
     // the custom property data-label is used
     function readLabels() {
         $.getJSON(labelURL, function (lData) {
             $.each(lData.Labels, function () {
                 labelText = myLang == "FR" ? this.LabelFr : this.LabelEn;
                 $("[data-label-id='"+ this.ID  + "']").text(labelText);
                 labelList.push(labelText);
             });
         });
     }

     // Get all units from JASON 
     function readUnits() {
         $.getJSON(unitURL, function (uData) {
             // Fill the array
             $.each(uData.Units, function () {
                 unitList.push(this);
             });
             sortListBySize(unitList);
         });
     }



     // ============ MAIN =========

     // Get all from remote JSON files
     readUnits();
     readObjects();
     readLabels();





     // Add autocomplete to object lists
     $(function () {
         $("#obj1").autocomplete({
             source: objNameList
         });
         $("#obj2").autocomplete({
             source: objNameList
         });
     });


    function getObjectName(objectIndex)
         {
             if (myLang == "FR")
                r= objList[objectIndex].ObjectFr
             else   
                r=objList[i].ObjectEn
             return r;
         } 
      


     function getObjectByName(aName) {
         var r = -1;
         for (i = 0; i < objList.length; i++) {
             curName = getObjectName(i);
             if (curName == aName) {
                 r = i;
             }
         }
         return objList[r];
     }


     function getBestUnit(aSizeInMeter)
     // Return best suitable unit for a given size in meters
     {
        var bestUnit=unitList[0];  // Assuming unit list has been sorted by size in meters
        for (var u=0;u<unitList.length;u++)
        {
            if (Math.log10(unitList[u].SizeInMeter) <= Math.log10(aSizeInMeter))
                 bestUnit=unitList[u];
        }    
        return bestUnit;
     }

     function rebuildTable() {
         sortListBySize(objList);
         var ob1Name = $("#obj1").val();
         var ob2Name = $("#obj2").val();
         if (ob1Name != "" & ob2Name != "") {
             let obj1 = getObjectByName(ob1Name);
             let obj2 = getObjectByName(ob2Name);
             var ratio = obj2.SizeInMeter / obj1.SizeInMeter;
             if (ratio < 1)
                 ratioText = "1 : " + (1 / ratio).toPrecision(4);
             else
                 ratioText = ratio.toPrecision(4) + " : 1";

             console.log("Ratio:",ratio)    ;

             $("#fldRatio").text(ratioText);

             $("tbody").remove();




             var htmlRowTemplate="<tr>"  
                                 + "<td data-label='"+ labelList[6]+"'><a href='%ur' target='_blank'>%na</a></td>"
                                 + "<td data-label='"+ labelList[9]+"'>%m</td>"
                                 + "<td data-label='"+ labelList[7]+"'>%si</td>"
                                 + "<td data-label='"+ labelList[8]+"'>%sc</td></tr>";
             oldClass='scMicro';   

             htmlTableBody="";

             for (i = 0; i < objList.length; i++) {
                 curName = myLang == "FR" ? objList[i].ObjectFr : objList[i].ObjectEn;
                 curSize = objList[i].SizeInMeter;


                 curUnit = getBestUnit(curSize);

                 curUnitSymbol = (myLang == "FR" ? curUnit.UnitSymbolFr : curUnit.UnitSymbolEn);   
                 curSizeInUnit = curSize /  curUnit.SizeInMeter;

                 curURL = objList[i].URL;

                 scaledSize = curSize * ratio;
                 scaledUnit = getBestUnit(scaledSize);
                 scaledUnitSymbol =  (myLang == "FR" ? scaledUnit.UnitSymbolFr : scaledUnit.UnitSymbolEn);
                 scaledSizeInUnit = scaledSize /  scaledUnit.SizeInMeter;

                 // Buil the HTML statement

                 if (curSize <= 	0.0001)
                   curClass='scMicro'
              else if (curSize <= 100)         
                  curClass='scHuman'
              else if (curSize <= 1.2e+7)         
                  curClass='scTravel'
              else if  (curSize <= 1e+10)  
                  curClass='scPlanet'
              else if  (curSize <= 1e+13) 
                  curClass='scSolar'
              else     
                  curClass='scCosmic'


                if (i==0)    
                  curRowHtml = "<tbody class='"+ oldClass+ "'>"+htmlRowTemplate
                else    
                  if (curClass != oldClass)
                     {
                     curRowHtml   = "</tbody><tbody class='"+ curClass+ "'>"+htmlRowTemplate
                     oldClass=curClass;   
                     }
                  else       
                     curRowHtml = htmlRowTemplate
                        

                 curRowHtml = curRowHtml.replace("%na",curName);
                 curRowHtml = curRowHtml.replace("%si",curSizeInUnit.toPrecision(4) + " " + curUnitSymbol);
                 curRowHtml = curRowHtml.replace("%sc",scaledSizeInUnit.toPrecision(4) + " " + scaledUnitSymbol);
                 curRowHtml = curRowHtml.replace("%ur",curURL);
                 curRowHtml = curRowHtml.replace("%m",curSize.toPrecision(4) + " m");
                 curRowHtml = curRowHtml.replace("%cl",curClass);

                if (i+1==objList.length)     
                    curRowHtml+="</tbody>"

                // console.log(curName,curSize ,"m ",   curSizeInUnit ,  curUnitSymbol," SCALED:",scaledSize , "m ",scaledSizeInUnit, scaledUnitSymbol ,curURL);
                
                htmlTableBody+=curRowHtml;
             }
             $("tfoot").before(htmlTableBody);
         }
     }