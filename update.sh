cd ..
cd ..
#git submodule foreach git pull 
git pull --recurse-submodules
npm install
git add .
git commit -m "ci: update submodules"