# `src/public/`

Contient des objets accédés dynamiquement.

Exemples:

- fichiers CSV / XML

## JavaScript
Référer au contenu de `public` depuis `/` et non pas `/public`. 

### Exemple
Dans la strcuture suivante
```
𝐬𝐫𝐜/
 ┣━ 𝐢𝐦𝐚𝐠𝐞𝐬/
 ┗━ 𝐩𝐮𝐛𝐥𝐢𝐜/myData.csv
```

On accèdera au fichier `myData.csv` comme suit:
```JavaScript
var myDataFile = "myData.csv";
```


