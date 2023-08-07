# introToMechatronics
This repo contains presentations for MAE3185 Introduction to Mechatronics class.

# Dealing with Symlinks
This repository contains symbolic links. It will work without any issues in Linux. However, Windows needs special treatment. Follow the steps given below.
1. Create a folder where you want to clone the contents of this repository.
2. Open git on windows with administrator privileges.
3. Change the directory to the newly created folder.
4. Type following  
   ```
   git clone --recurse-submodules -c core.symlinks=true https://github.com/vxj9800/introToMechatronics.git .
   find -type l -delete
   git reset --hard
   ```
