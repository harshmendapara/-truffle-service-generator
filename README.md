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



## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

**truffle-plugin/truffle-generate** © [Harsh Mendapara](https://github.com/harshmendapara/), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Harsh Mendapara with help from contributors ([list](https://github.com/Harsh02051998/countries-states-cities-countries-states-cities-database-all-formate/graphs/contributors)).

> GitHub [@Harsh Mendapara](https://github.com/harshmendapara)

> Gmail [@Harsh Mendapara](mendaparaharsh02@gmail.com)

> Linkedin [@Harsh Mendapara](https://www.linkedin.com/in/harsh-mendapara-44883a165/)

> Facebook [@Harsh Mendapara](https://www.facebook.com/mhb0205)
> 
Let's fly together :)


