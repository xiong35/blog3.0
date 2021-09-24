#!/bin/bash

## 一键提交 dev, merge dev 到 master, 提交 master 的小脚本, 具体见下方注释 ##
# 在 linux shell 下执行 `./scripts/buildProd.sh` 命令即可
# windows 选手可以用 git bash 执行


echo -e "\n### switch to DEV ###\n"
git switch dev

echo -e "\n### build ###\n"
cd fe
yarn build
cd ../be
yarn build

echo -e "\n### commit ###\n"
cd ..
git add .
git commit -m "build fe & be"

echo -e "\n### push DEV ###\n"
git push

echo -e "\n### switch to master ###\n"
git switch master
echo -e "\n### merge DEV into MASTER ###\n"
git merge dev --no-ff
echo -e "\n### push MASTER ###\n"
git push

echo -e "\n### switch back to DEV ###\n"
git switch dev

echo -e "\n\n# # # # # # # # # # # #"
echo "#       ALL DONE      #"
echo "# # # # # # # # # # # #"
