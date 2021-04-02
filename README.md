# truffle-plugin/truffle-generate
=========

This package is to generate js web3 functions for all truffle contracts artifact 

Why do we need it ?
------------
To save your time :) 


# to use
- as truffle plugin :
  - add the package to your truffle project `npm install truffle-web3-generator` 
  - add the plugin to `truffle-config.js` ` plugins: [
     plugins: [
    'truffle-web3-generator'
  ]`
  - `truffle run generate`
  - or `truffle run generate -d YOUR_ARTIFACT_PATH  -p YOUR_PROVIDER `
- as node package 
  - `npm install`
  - `truffle-generate  -d YOUR_ARTIFACT_PATH  -p YOUR_PROVIDER `
  - you can use it inside any truffle project , run `truffle migrate`  then `truffle-generate ` it will take the default contract artifacts you can spacify the provider through this flag `--provider` or `-p` otherwise , it will take the default `http://127.0.0.1:8545` 

# NOTE
this is inital setup and there are many edits should be done .


