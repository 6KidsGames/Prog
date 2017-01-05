# Prog

![6KidsGames Logo](https://github.com/6KidsGames/ZombAttack/blob/master/Sprites/6KidsLogo.png "6KidsGames")

Programming problems, done within a repo for use of pull requests.

# Using This Repo

## Folder structure
The 'users' folder contains one folder per student. Within each student folder we store:

* Source code files like 'Arrays.js' and other files we use t osolve weekly classes.
* Jupyter JavaScript notebooks assigned by the instructor.

The 'users/Answer' folder will be updated with the problems and one possible answer after class, for those who missed it.

## Getting started - First Time Setup
1. Install Git from https://git-scm.com/download/win (for Windows), or https://git-scm.com/download for other operating systems.
1. Install Node.js from https://nodejs.org (click the Current button to get the latest).
1. Install Visual Studio Code from https://www.visualstudio.com/products/code-vs
1. Install Anaconda from https://www.continuum.io/downloads - choose the Windows 64-bit installer
1. Open a Windows console: Windows+R (to open the Run box), then type `cmd` and press Enter.
1. Create a new folder: `mkdir c:\Prog`
1. Move to that folder: `cd c:\Prog`
1. Clone the Git repo to your new folder: `git clone https://github.com/6KidsGames/Prog .`

## Every day - pulling code and installing updates
When you're developing code with a team, you're going to need to get their code as well as upload your code. A good time to do this is at the start of
each day, unless you're in the middle of something.

1. (If you don't already have a console open) Open a Windows console: Windows+R (to open the Run box), then type `cmd` and press Enter.
1. Change location to that folder: `cd c:\Prog`
1. Create some useful console shortcuts: `init`
1. See if you have any files changed locally, and if you're in a working branch: `stat` .
1. If you are not on the `master` branch, run `git checkout master`
1. If "package.json" is listed in red, run `git checkout -- package.json`
1. If you have other files changed, get it committed and `git checkout master`, or talk to the teacher.
1. Pull down the latest code: `pull`
1. Run Setup.cmd (which installs the latest packages from the Internet) by entering: `Setup`

## Every day - Running Jupyter
When we are using Jupyter notebooks, you need to run the Jupyter server, which uses Node.js.
To run Jupyter we have a script command that you run from within your c:\Prog folder:

 `jupyter`

## Every day - Creating and Running JavaScript Code
We also create our own JavaScript code using Visual Studio Code, and run it with node.js.
To edit your code:

1. Change to your user directory:  `cd c:\Prog\users\<your-user-name>`  (Obviously, replace <your-user-name> with the folder name for yourself.)
1. Run Visual Studio Code in that directory:  `code .`
1. If you need to create a new JAvaScript program file, use the File menu's New command, then save the resulting file with a new filename as directed during class.

## Every day - Pushing Your Results to the Repo on GitHub
Unlike our other code projects like ZombAttack, all users in class can push to the cloud. So all you need to do is to check in your changes to master, then push to the cloud, and pull back again to get the latest code.

You can do this quickly using the helper script in c:\Prog: `PushMyWork`
 