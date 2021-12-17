/*Translation Classes to suppoer t9n */


class t9nLabel {
    /* single label */
    #Labels;
    constructor(keyPairs) {
        this.#Labels = new Map(keyPairs);
    }
    addLang(aLang, aTranslation) {
        this.#Labels.set(aLang, aTranslation);
    }
    Label(aLang) {
        return this.#Labels.get(aLang);
    }
}

'use strict'; 

class t9nTranslation {
    /* Translation Class 
       =================
       set the current language to user language 
       Store a list of label maped by mumeric ID 
    */
    #FallbackLanguage = "";
    #Labels;
    constructor(langArray) {
        this.SupportedLanguages = [];
        this.#Labels = new Map();
        for (var u = 0; u < langArray.length; u++) {
            this.SupportedLanguages.push(langArray[u].toUpperCase());
        }
        if (this.SupportedLanguages.length > 0)
            this.#FallbackLanguage = this.SupportedLanguages[0];
        this.CurLang = this.UserLang; /* Default to user language */
    }
    get UserLang() {
        var l = navigator.language.split("-")[0].toUpperCase();
        var r = this.#FallbackLanguage; /* if not supported, fallback language */
        for (var i = 0; i < this.SupportedLanguages.length; i++)
            if (this.SupportedLanguages[i] == l) r = l;
        return r;
    }
    setCurlang(l){
        this.CurLang=l;
    }

    addLabel(id, aT9nLabel) {
        this.#Labels.set(id, aT9nLabel);
    }
    getLabel(id) {
        // Get label in current language
        var labelT9N = this.#Labels.get(id);
        if (labelT9N != null) {
            let label = labelT9N.Label(this.CurLang);
            if (label == null) label = labelT9N.Label(this.#FallbackLanguage);
            return label;
        }
    }
}

export {t9nLabel,t9nTranslation}
