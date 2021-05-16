---
title: Step by Step Guide
---

For now we only have guides for Windows 10, MacOs and Linux (Ubuntu to be precise). If you are running
a different Windows version, please let us know.

The instructions start with Mac since it's most different, and the Windows and Linux parts share most
of the setup steps. If you are using Mac, please only do the steps highlighted in __For Mac__.

If you are installing on Windows, please do everything listed under __For Windows__
and under __For Windows and Linux__ - there are multiple such sections.

If you are using Linux, please do everything listed under __For Linux__ and under __For Windows and Linux__.

### For Mac
We will be using the Xcode Command Line Tools for installing the above mentioned software. On Mavericks (10.9) 
or above, you should be able to install what you need by trying to run it from the Terminal the very first time.

#### Nodejs + npm
Open the Terminal by pressing Command+Space to open Spotlight Search and entering Terminal then pressing Enter.
In the Terminal window that appears, write
```
node -v
```
and press Enter.

You can verify that everything works as it should by writing
```
node -v
```
and
```
npm -v
```
which should both give you back a version listing as response.

#### git
Open the Terminal by pressing Command+Space to open Spotlight Search and entering Terminal then pressing Enter.
In the Terminal window that appears, write
```
$ git --version
```
and press Enter. Again, you should get a version listing as response once git is installed.

#### Visual Studio Code
You should be able to just download Visual Studio Code under the link here:
[Link to visual studio code website](https://code.visualstudio.com/download)

### For Windows
Before we can use a Linux distribution on Windows, we have to activate the Windows subsytem for Linux. 
There are 2 easy ways to do so.

* Open a Windows powershell as administrator an run the command:
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
* Search Windows Cortana for "Windows feature on and off" scroll all the way down until you find 
"Windows-Subsystem for Linux", activate the checkbox and Save your changes.

Which ever way you choose, a system restart will be required.

Once that's done you can go ahead and download and install your favorite Linux distribution.

### For both Windows and Linux
#### Nodejs + npm
First, we'll make sure that you don't currently have Node.js installed, by running the uninstall
steps. For that, we will run the package managers removal method on both nodejs and npm, as 
administrator. The full command for Ubuntu (18.04) looks like this:
```
sudo apt remove nodejs npm
```
__Explanation:__
* sudo will run the next provided command with administrator (root) privileges.
* apt is the "Advanced Package Tool" which handles the installation and removal of software on many
Linux distros.
	* remove is the apt parameter for deleting a package of software
	* we finishe the command with a list of software packages we want to deinstall, in our case that is
	* nodejs and
	* npm

When you've understood what will happen once you execute the command above, go ahead and do so.

When that is done, we will setup the installation of a new version of nodejs directly from the
distributors website. The command for that looks like this:
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```
__Explanation:__
* curl is a powerful Linux commandline tool to access web content
	* -sL are parameters that change the way curl behaves. -sL is short form for -s -L
		* -s stands for silent, so no download progress will be displayed
		* -L is used to follow HTTP redirects instead of stopping the request, e.g. when a page moved.
	* https://deb.nodesource.com/setup_10.x is the url we want to pull the node setup script from.
		* If you want to use a different version than 10.x, specify it here. e.g. setup_12.x
	* \| is called a pipe, it takes the input from the previous command and forwards it to the next one.
* sudo we already talked about
	* -E is a parameter for sudo, which informs sudo that we want to keep the current environmental
variables although we'll run the following command with administrator privileges
* bash - is used to execute the bash code we downloaded from the website. bash is it's own
programming language, and it's one that most linux distros come with preinstalled.
	* So basically, we download code via curl, and via the pipe operator, execute what we downloaded
with the bash command, as administrator thanks to sudo.
		* This is an incredibly unsafe, but pretty common, practice.

At this point, all we have done is prepare apt for installing the correct version of nodejs. The
installation itself can now be done by running:

```
sudo apt install nodejs
```

Once this has finished, you should be able to verify that the installation was successful by running
```
node -v
```

and 
```
npm -v
```

both should give you some version numbers back.

#### Git
To install git on your Linux console, simply use apt.

```
sudo apt install git
```

To verify this worked as intended, you can run

```
git --version
```
which should again show some kind of version number.

### Only for Windows
As a final step, go and install Visual Studio Code on your Windows environment - not your Linux
machine. Careful, Visual Studio Code is not the same as Visual Studio.

This should also automatically install the server parts into your WSL environment, so that we can
run Visual Studio Code from there.

### Only for Linux
If your base operating system is Linux, go on and install Visual Studio Code directly onto Linux.

### For both Windows and Linux
You should now go and verify that your Visual Studio Code setup is working as intended. For that,
open a new Linux console and execute
```
code .
```
__Explanation:__
* code is the command to start Visual Studio Code
* . always refers to the current directory, ergo the directory your console has currently open. The
code command takes a directory to be used as workspace as it's first parameter


This should open a new Visual Studio Code instance, with your Linux home folder as the current
working directory.

## Create a GitHub Account
If you don't have one yet, please set up a GitHub Account. We'll use it all out through the course
to get experience with Git.