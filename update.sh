#cd ..
#cd ..
pwd
git pull --recurse-submodules
git submodule update --init
git submodule foreach git checkout main
git submodule foreach git pull origin main
git submodule foreach git checkout main
npm install
git add .
git commit -m "ci: update submodules"
git push
