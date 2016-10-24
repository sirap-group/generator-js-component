# generator-js-component

>>> Il s'agit d'un développement en cours (WIP)

[![NPM version][npm-image]][npm-url]
[![npm][npm-image-2]][npm-url-2]
[![GitHub tag][github-badge]][github-repo-url]

[![JavaScript Style Guide][standardjs-image]][standardjs-url]
[![Semver 2.0][semver-image]][semver-url]

[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Coverage percentage][coveralls-image]][coveralls-url]

<!-- [![Bower](https://img.shields.io/bower/v/generator-js-component.svg?maxAge=2592000?style=plastic)](https://github.com/sirap-group/generator-js-component) -->

<!-- [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=plastic)](https://github.com/sirap-group/generator-js-component) -->

## De quoi s'agit il ?

Un générateur pour initialiser des modules javascript pour node.js ou pour le navigateur, publiés sous forme de paquets javascript npm et bower.

## Prérequis

Pour pouvoir lancer le générateur, vous avez besoin d'avoir installé `npm` et `yeoman`.

### npm

Vous pouvez vérifier si `npm` est installé:

    $ npm --version

Si la  commande n'est pas trouvée, `npm` n'est pas installé sur le système ou pour votre utilisateur.
Nous recommandons d'utiliser `nvm` (Node Version Manager) pour gérer les installations et les versions de `node` et de `npm`.

    $ nvm --version

    $ yo --version

Sinon, vous devez commencer par installer `npm` puis yeoman (`yo`) :

    $ nvm install lts/argon
    $ nvm alias default lts/argon
    $ nvm use default

Puis

    $ npm install --global yo

## Installation

    $ npm install --global generator-js-component

## Utilisation

Pour générer votre composant javascript :

    $ yo js-component

## Licence

MIT © 2016 [Rémi Becheras]/[Groupe SIRAP]


<!-- Références externes  -->

[Rémi Becheras]:https://github.com/rbecheras
[Groupe SIRAP]:https://github.com/sirap-group

[npm-image]:https://badge.fury.io/js/generator-gentest.svg
[npm-url]:https://npmjs.org/package/generator-gentest
[npm-image-2]:https://img.shields.io/npm/v/generator-js-component.svg?maxAge=2592000?style=plastic
[npm-url-2]:https://www.npmjs.com/package/generator-js-component

[github-badge]:https://img.shields.io/github/tag/sirap-group/generator-js-component.svg?maxAge=2592000?style=plastic
[github-repo-url]:git@github.com:sirap-group/generator-js-component.git

[standardjs-image]:https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standardjs-url]:http://standardjs.com/

[semver-image]:https://img.shields.io/badge/Versioning-Semver%202.0-brightgreen.svg
[semver-url]:http://semver.org/

[travis-image]:https://travis-ci.org/sirap-group/generator-gentest.svg?branch=master
[travis-url]:https://travis-ci.org/sirap-group/generator-gentest

[daviddm-image]:https://david-dm.org/sirap-group/generator-gentest.svg?theme=shields.io
[daviddm-url]:https://david-dm.org/sirap-group/generator-gentest

[coveralls-image]:https://coveralls.io/repos/sirap-group/generator-gentest/badge.svg
[coveralls-url]:https://coveralls.io/r/sirap-group/generator-gentest
