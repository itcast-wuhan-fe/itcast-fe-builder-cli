#!/usr/bin/env node

import yargs from 'yargs'

const {argv}=yargs
.scriptName('simple')
.usage('Usage:$0 <command>')
.demand(1)//至少需要一个参数
.command(
  ['dev','d'],
'this is for develop model!',
(yargs)=>{
  console.log('dev');
  return yargs;
})
.command(['pro','p'],'build for production model',(yargs)=>{
  console.log('pro')
  return yargs;
})
.command(['init','i'],'init the project',(yargs)=>{
  console.log('init')
  return yargs;
})
.help();