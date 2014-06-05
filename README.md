
**Découvrir en live : http://esipe.geonef.fr/gotham-city/**

Bienvenue à Gotham City ! Afin de vous aider à vous repérer et éviter les mauvaises rencontres, nous vous avons préparé une carte de la ville, ses îles, quartiers, routes, moyens de transports, ... Plus important, vous pourrez voir les zones contrôlées par les « vilains », mais aussi la position des héros de notre belle ville ! Les bâtiments principaux, tel que les commissariats ou les hôpitaux, apparaissent également sur la carte, on ne sait jamais… 


Visualiser en WMS sous QGIS
---------------------------

...ou tout autre [client WMS](http://fr.wikipedia.org/wiki/Web_Map_Service).
Procédure pour [QGIS](http://www.qgis.org/) :

 * *Couche* -> *Ajouter une couche WMS*
 * cliquer sur *Nouveau* pour ajouter ce serveur WMS :
   * Nom : *gotham-city* (ou autre)
   * URL : *http://mapserver.esipe.geonef.fr/gotham-city/map?*
 * cliquer *OK* puis de retour à la fenêtre précédente, cliquer en bas sur *Ajouter* puis *Fermer*
 * c'est prêt : la couche devrait apparaître sous quelques secondes, navigable évidemment. Enjoy!


Installation
------------
Le [tutoriel du cours](http://www.geonef.fr/doc/cours/mapserver-et-wms/installation-systeme)
vous guide dans la mise en place de l'environnement sur une machine virtuelle
VirtualBox, donc utilisable depuis Windows, Mac ou Linux.

La machine installée est une *Debian GNU/Linux* exploitant
*MapServer* en FastCGI derrière le serveur HTTP *Nginx*.

Il est bien-sûr possible d'utiliser d'autres environnements comme par
exemple Apache sur Windows.

Après avoir cloné localement ce dépôt Git, il faut récupérer l'archive :
http://esipe.geonef.fr/gotham-city/extra-data.tar.bz2
et la désarchiver dans le même dossier, en faisant :
```
curl http://esipe.geonef.fr/gotham-city/extra-data.tar.bz2 | tar xjv
```


Auteurs
-------

Projet réalisé par :
* Philippe Genot <pgenot@etudiant.univ-mlv.fr>
* Antony Valette <avalette@etudiant.univ-mlv.fr>

étudiants IG2 de
[l'École Supérieure D'Ingénieurs de l'Université Paris-Est Marne-la-Vallée (ESIPE)](http://esipe.u-pem.fr/),
dans le cadre du cours *[Serveurs cartographiques](http://www.geonef.fr/doc/cours/mapserver-et-wms/)*.


Licence
-------

Les fichiers présents dans ce dépôt sont distribués sous les termes de
la licence CeCILL 2.1 contenue dans le fichier ./LICENSE et dont l'original
est disponible à l'URL http://www.cecill.info/licences/Licence_CeCILL_V2.1-fr.html
