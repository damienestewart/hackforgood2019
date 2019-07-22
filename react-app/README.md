# Getting Started

- [Introduction](#introduction)
- [Getting the code](#getting-the-code)
- [Making and committing changes](#making-and-committing-changes)
- [Building, deploying, and testing](#building-deploying-and-testing)
  - [When things go wrong](#when-things-go-wrong)
- [Pull Requests](#pull-requests)
- [Appendix](#appendix)
  - [Rebasing](#rebasing)
  - [Configuration](#configuration)
  - [Fixing permissions](#fixing-permissions)

## Introduction

The OneSite StarterKit was built with the goal of standardizing the frontend infrastructure for new production-ready applications, or proof of concept apps. By maintaining a reusable framework that implements the capabilities needed for new applications, the idea was to reduce the startup costs for new projects. As each new project builds additional capabilities, the intention is to contribute back to the base repository for future reuse.

### Framework Capabilities

The framework implements and makes use of the following capabilities:

- **React** - The Single Page Application framework is built using [React](https://reactjs.org/), as many of Microsoft's component and style frameworks are aligning in this direction.
- **Routing** - Application routing is implemented with [React Router](https://reacttraining.com/react-router/).
- **ES6 with Strong Typing** - The framework is built with [TypeScript](https://www.typescriptlang.org/) which gets transpiled with [Babel](https://babeljs.io/).
- **SASS Styles** - Component styles are added using [SASS](https://sass-lang.com/) for more advanced CSS features.
- **Code Linting** - Linting is enforced during the precommit and build phases to require a high degree of code quality. SASS is linted with [StyleLint](https://stylelint.io/), TypeScript is linted with [TSLint](https://palantir.github.io/tslint/) using the [Microsoft TSLint Rules](https://github.com/Microsoft/tslint-microsoft-contrib). There are separate configurations for Dev and Prod builds to surface warnings during development, and errors during builds.
- **Microsoft React Components** - The use of [Office UI Fabric](https://developer.microsoft.com/en-us/fabric) is highly encouraged wherever possible, and is integrated directly into the framework.
- **Data Provider Pattern** - The framework uses [Redux](https://react-redux.js.org/) and [Saga](https://redux-saga.js.org/) to access data from an API and reduce it into the Redux store. The patterns implemented are based loosely from the [Static Typing Guide](https://github.com/piotrwitek/react-redux-typescript-guide) and the following [example](https://github.com/resir014/react-redux-typescript-example).
- **Unit Test w/ Snapshot Testing** - [Jest](https://jestjs.io/) unit testing framework is integrated into the framework, and uses [Enzyme](https://airbnb.io/enzyme/) for shallow rendering of components at test time. This configuration also gives access to [Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing) which is a great way to rapidly build out tests when rapidly prototyping.
- **Reusable CI / CD** - When forking the framework for a new project, be sure to export the CI/CD Azure Pipelines to get builds and deployments that are integrated with many of the framework features:
	- **Code Coverage and Unit Tests Reports** - All code coverage metrics and unit test results are integrated directly with the Azure DevOps Build Report page.
- **Frontend Build System** - [Webpack](https://webpack.js.org/) is a core part of the framework, allowing us to use configurations to implement advanced features.
	- **CSS Cross Browser Compatability** - All SASS is processed with [Autoprefixer](https://github.com/postcss/autoprefixer) to add browser specific prefixes for cross-browser compatibility. This allows developers to worry less about adding browser specific code into the database, as it's inserted at build-time.
	- **Treeshaking** - Using Webpack to create a dependency graph, it's possible to determine which parts of the code base is not actively used, and remove it when possible.
	- **CSS and JavaScript Bundling** - Webpack will inteligenty determine how to produce bundles, and when to separate common dependencies into smaller chunks for web performance.
  - **Bundle Cache Busting** - Each bundle contains a hash in the name to allow for reliable cache busting.
	- **Code Splitting** - Following our routing pattern that uses [React Loadable](https://github.com/jamiebuilds/react-loadable), route based [Code Splitting](https://webpack.js.org/guides/code-splitting/) is provided for free.
	- **Minification** - All SASS, HTML, and JavaScript is bundled and minified during the build process.
	- **Sourcemaps** - To enable debugging, sourcemaps are provided for the CSS and JavaScript output.
	- **Media Inlining** - To reduce web requests needed to load a page, media resources under a particular size can be inlined directly into the HTML at build time.
- **Environment Specific Build Configurations** - To improve build times between environments, there are separate Webpack configurations for Dev and Production builds. Dev is optimized for debugging and speed, while Production is built for performance and code quality.
- **Hot Module Replacement** - HRM features are integrated into the development build with [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/), allowing targetted recomiling of specific files that change, and automatically updating the browser with the results.
- **Code Coverage Reports** - There are npm tasks available to execute [Istanbul](https://github.com/gotwarlost/istanbul) coverage reports and output an interactive HTML page to discover how to improve coverage based on each module.
- **Bundle Analyzing Reports** - Each production build outputs a [visualization](https://github.com/webpack-contrib/webpack-bundle-analyzer) of the bundles as stats on each module. Using these, the team can quickly diagnose bundling issues and eliminate unused or incorrectly bundled dependencies.
- **Code Documentation Generation** - The framework linting rules enforce [JSDoc](http://usejsdoc.org/) comments in the TypeScript code which is useful when executing an automatic documentation generator to output HTML-based references for the project code. This process uses [TypeDoc](https://github.com/TypeStrong/typedoc) which works with TypeScript.
- **Environment Variables** - Using .env files, is easy to [add configurations](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables) for each environment, including local overrides for testing.
- **CSS Modules** - Any SASS file with `.module.scss` will be processed as a CSS module,  and scoped to the compenent it's bound to. This also extends Webpack's treeshaking functionality to the CSS and allows us to eliminate unused styles.
- **Progressive Web App** - The functionality to enable a Service Worker to cache files and allow offline mode is integrated directly into the framework.
- **AAD Authentication** - Using the [React AAD MSAL](https://github.com/syncweek-react-aad/react-aad) library which acts as a wrapper for [MSAL.js](https://github.com/AzureAD/microsoft-authentication-library-for-js) from Azure Active Directory.

### Planned Capabilities

The framework is an ongoing process. There are additional capabilities that many production-ready Microsoft applications need. The following is a list of features expected to be added as they scenarios are encountered in the real-world:

- **Locale in Routes** - For SEO and localization purposes, most public facing Microsoft websites expose the locale directly into the Url (/en-us/).
- **Authenticated Routes** - A flexible solution for locking certain pages down with authentication while exposing others as non-authenticated areas.
- **Server-Side Rendering** - For SEO purposes, being able to selectively render certain public facing pages on the backend is an eventual goal.
- **Containerized Deployments** - Using Docker or Kubernetes to deploy or quickly bootstrap a developer environment.
- **Additional CD Environments w/ Staging** - Add intermediary environments between Dev and Production, including the use of Staging slots to mirror most API deployment processes.
- **Universal Header Footer** - Integration with the UHF system with examples.

## Getting the code

- This will work on either a Windows laptop or a dev machine.
- You should be able to do all the command line parts in non-admin (non-elevated) mode if you want. The catch is that if
  you do at some point run a command in admin mode, you'll probably have to run most commands in admin mode from then on
  (or [fix the permissions](#fixing-permissions) manually).

### Set up pre-requisites

1. **Install node.js LTS version**: https://nodejs.org - This is used to run our builds.

1. **Install Git**: http://www.git-scm.com/download -- This is used to sync bits and check in and such.

   - During install, choose "Use Git from the Windows Command Prompt"
   - On the line ending options screen, choose "Checkout Windows-style, commit Unix-style line endings"

1. (Recommended) **Install Visual Studio Code**: https://code.visualstudio.com -- This is a modern text editor that
   provides Intellisense for TypeScript and has good Git integration.

   - Be sure to check "Add to PATH" in the installer.
   - See [this section](#visual-studio-code) for configuration suggestions.
   - Another option is Sublime Text, which has great pure text editor capabilities but is not as good for TypeScript.
     [Download here]((http://www.sublimetext.com/).

1. (Optional) **Install other programs**:

   - [SourceTree](https://www.sourcetreeapp.com/) Git GUI
   - If on Windows, a smarter terminal (for better copy/paste and multiple tabs):
     - [ConEmu](http://conemu.github.io)
     - [Cmder](http://cmder.net/)

1. **Set up your system PATH variable**: Add the following directories, then reopen any command prompts.
   Substitute `Program Files (x86)` where appropriate if you install 32-bit versions.)

   - `C:\Program Files\git\cmd`
   - `C:\Program Files\nodejs`
   - `C:\Users\[you]\AppData\Roaming\npm`

1. **(Mac only) Set up authentication**: Do ONE of the following:

   - Verified to work: Set up SSH keys following [these instructions](https://www.visualstudio.com/en-us/docs/git/use-ssh-keys-to-authenticate).
   - Untested at time of writing: there is now a [Git Credential Manager for Mac](https://github.com/Microsoft/Git-Credential-Manager-for-Mac-and-Linux).

1. **Make a root folder** for your repositories (example: C:\Git)

1. **Set up global Git configuration** (run at command prompt)
   - Your full name and email, so they show up in history properly:
     ```
     > git config --global user.name "First Last"
     > git config --global user.email "you@microsoft.com"
     ```
   - Only push the current branch by default, and remove deleted branches when pulling:
     ```
     > git config --global push.default current
     > git config --global remote.origin.prune true
     ```
   - Run ONE of the following lines to choose Notepad, Sublime Text, or Visual Studio Code as your default editor,
     to be used for commit messages and other purposes (unless you know what vim is and how to use it):
     ```
     > git config --global core.editor notepad
     > git config --global core.editor "'C:/Program Files/Sublime Text 3/subl.exe' --wait"
     > git config --global core.editor "'C:/Program Files (x86)/Microsoft VS Code/code.exe' -w"
     ```
   - Optional: [set up aliases](#git-aliases)

### Initial clone

"Cloning" in Git is the equivalent of "enlisting" in Source Depot.

1. From command line (cd'd to the root folder you made previously):
   ```
   > git clone https://worldwidelearning.visualstudio.com/onesite-starterkit/_git/onesite-starterkit
   ```
   - On Windows (or Mac using the credential helper), a dialog will pop up asking you to sign in.
   - It should NOT ask for credentials within the command line.
     - If on Mac and this happens, set up authentication following one of the later steps under [Set up pre-requisites](#set-up-pre-requisites).
1. Once that's done, you will have a folder named the same as the project you just cloned with all of the code in it.

## Making and committing changes

Start by making a branch for your changes. On the command line:

```
> git checkout -b alias/my-feature-name
```

(Your local branches can have whatever name you like, but branches in VSO must be prefixed with your alias.)

### Making changes and seeing what's changed

#### Making changes

To change a file in Git, just edit and save--no need to mark as open for editing like in Source Depot.

Some tips for Visual Studio Code:

- Press `Ctrl+P` and start typing the name of a file to quickly open it.
- To get Intellisense, go to `File -> Open Folder` and choose the project root folder. It may take a few seconds to
  initialize after you open a TypeScript file.) If it stops working, press `Ctrl+Shift+P` and type/choose `Reload window`.

#### Seeing what's changed

There are many methods to see what changes you've made. Some common ones:

- Command line:
  - `git status` to see file names only
  - `git diff` to see differences; use up/down arrows to scroll and `q` to quit
- Visual Studio Code: Click the Git icon in the bar on the left side.
- SourceTree: Open the repository you're interested in. Click on "Working Copy" under "File Status" on the left nav.

To undo all changes, use `git reset --hard HEAD`.

### Staging and committing changes

Git has a concept of _staged_ (added) and _unstaged_ changes. Only _staged_ changes will be included when you commit.

#### Staging

Some common methods for staging changes:

- Command line
  - `git add -A`: stage all changes, including newly created files.
    - Using the `-a` option with the commit command (below) has almost the same effect as `git add -A`,
      but it won't include newly created files.
  - `git add path\to\file.ts` (cmd.exe) or `git add path/to/file.ts` (Git Bash/non-Windows): stage individual files.
    Passing in a directory path will stage everything in the directory.
- Visual Studio Code (in the Git left panel)
  - Click the + next to individual files in the "Changes" section to stage them.
  - Click the + next to the "Changes" heading to stage all changes.
- SourceTree (in the "Working Copy" section from the left nav)
  - Click the checkbox next to individual files in the "Unstaged files" section to stage them.
  - Click the checkbox next to the "Unstaged files" heading to stage all changes.
  - SourceTree also makes it easy to stage individual chunks of files. Use the "Stage hunk" button in the diff panel.

#### Committing

- Command line: Run `git commit`, and a text editor will open. Type an informative message, save, and close to finish the commit.
  - If you didn't set an editor under [Set up pre-requisites](#set-up-pre-requisites), vim (a command line text editor) will open.
  - To exit vim and go set your own text editor, press (one key at a time) `:q`.
  - To edit and save a commit message using vim, type a message, press `esc`, then press (one key at a time) `:wq`.
  - Before the commit is finalized, the code will be linted and have unit tests executed.
- Visual Studio Code: In the Git left panel, type something informative in the "Message" box and press Ctrl+Enter.
- SourceTree: In the "Working Copy" section, type something informative in the "Commit message" box and press the "Commit" button.

## Building, deploying, and testing

### Building and troubleshooting build issues

#### Initial build

Run these steps in the root of every Git repository you just checked out.

- `npm install` installs Node package dependencies. They will go in `<project root>\node_modules`.
- `npm run build` builds the code, builds bundles, and runs tests

#### Other npm tasks/options

- `npm start` starts a process that builds the code, listens for changes to files, and rebuilds when a file changes.
- `npm test` executes unit tests and outputs results. Also save code coverage to the `<project root>/coverage/` folder.
  - `npm run test:coverage` runs unit tests and saves code coverage reports in HTML format to the `<project root>/coverage/` folder.
  - `npm run test:watch` runs unit tests and watches files for changes, and re-executes affected tests.
- `npm run build` builds production artifeacts and outputs them into the `<project root>/build/`
- `npm run lint` executes all linting across the projects and outputs any errors encountered.
  - `npm run lint:ts` lints only the TypeScript and JavaScript in the project.
  - `npm run lint:scss` lints only the SCSS in the project.
  - `npm run lint:types` Performs only the strong-type checks of the TypeScript code.
- `npm run docs` Generates the TypeScript docs using `TypeDoc`, and outputs the HTML reports to the `<project root>/docs/` dolder.

#### When things go wrong

Some things to try (one at a time) if your build fails and it doesn't seem to be due to your changes:

- `npm install`: Get any added packages and any new major versions of packages.
  - Related: `npm update` to get point version updates of packages
- Delete node_modules and reinstall. To avoid path too long errors while doing this on Windows:
  - Install rimraf: `npm i -g rimraf`
  - From the command line, run `rimraf node_modules`
- Ensure you're on the correct Node and npm version. As of 1/18/2018, this is Node 8.
  - Check your Node version with `node -v`. If needed, download a new version from http://nodejs.org.
    (After installing, run `npm cache clean` to remove old package versions.)
- Merge conflicts with the package-lock.json file can be resolved by executing an `npm install` command. `npm` will automatically fix merge conflicts.

## Pull Requests

To check code into the `master` branch for the codebase, you need to submit a pull request from a feature branch
which has been pushed to VSO.

### Create a Pull Request

When you have code ready in a branch to create a pull request, do the following:

1. Clean up your branch by rebasing it on the `master` branch.

   1. Refresh your local copy of `master`.
      ```
      > git checkout master
      > git pull
      ```
   2. Check out your local feature branch.
      ```
      > git checkout alias/my-feature-name
      ```
   3. Create a backup of your feature branch.
      ```
      > git branch -f backup/my-feature
      ```
   4. Rebase your local feature branch on top of the current version of `master`.
      ```
      > git rebase master
      ```
      If this gives you any grief, look at the guide for [Rebasing](#rebasing).

2. Push your branch to VSO.

   ```
   > git push origin alias/my-feature-name
   ```

   If your local branch doesn't follow the required VSO naming format, either rename it with `git branch -m alias/my-feature-name`
   or map your local branch to one qualified with your alias on the server using `git push origin HEAD:alias/my-feature-name`.

3. Create a pull request in Visual Studio Online
   - Visit the [Pull Requests](https://worldwidelearning.visualstudio.com/_git/onesite-starterkit/pullrequests) page in VSO
   - At this point, VSO may detect your new branch and show a banner with an option to _Create Pull Request_.
     Otherwise, click the large _New pull request_ button in the top right.
   - Select your `alias/my-feature-name` branch from the _Select a branch..._ dropdown, and make to it says "relative to `master`.
   - Paste the deployment URLs from your build into the bottom of the Description field.
   - In the Reviewers field, add at least two colleagues, preferably ones who are familiar with your feature and affected areas.
   - Click _Create Pull Request_.
   - Reviewers should receive an email notification, but you may also want to manually bring it to your primary reviewers' attention.

### Update a Pull Request

If you need to make changes to your pull request, do the following:

1.  Make your local changes and commit them.
1.  Refresh your branch on the latest version of `master`: see [Rebasing](#rebasing)
1.  Push your changes to your remote branch in VSO

    ```
    > git push -f origin alias/my-feature-name
    ```

    This will automatically update the pull request.

    **Note**: It is important when using `git push -f` that you specify your branch name correctly. Otherwise you might accidentally
    create a new branch, or overwrite one of your existing remote branches. (If someone else is committing to your personal feature branch,
    merge rather than rebasing, and don't force push.)

1.  Mark any affected comments as `Resolved` to indicate to the reviewer that their concerns are addressed.

### Complete a Pull Request

Once you have sent your pull request out for review, VSO will automatically attempt to build and validate your changes.

All pull requests for `master` require at least one sign-off, with two recommended for most changes. Sometimes, individual files
require additional sign-offs from specific feature area owners.

Reviewers may add comments and leave them in the `Active` state. You should address comments either by [updating the pull request](#update-a-pull-request),
or marking them as `Won't Fix` with an appropriate justification.

Once you have received sign-off from _all_ reviewers who have participated in the review and your build has succeeded, merge your changes
by clicking the _Complete pull request_ button.

- Leave the _Delete source branch_ box checked.
- Check the _Squash changes when merging_ box (unless you have a specific reason not to).

After completing your pull request, update locally and delete your copy of your old branch.

```
> git checkout master
> git pull
> git branch -D alias/myoldfeature
```

Then make a new branch for your new feature/work item.

#### Manually Deleting a Remote Branch

If you accidentally uncheck _Delete source branch_, or if you need to delete one of your remote branches for some other reason,
use [this fancy new branch view](https://worldwidelearning.visualstudio.com/_git/onesite-starterkit/branches) or the following command:

```
> git push origin --delete alias/my-feature-name
```

# Appendix

## Rebasing

Periodically, you will want to bring in the latest changes from `master` into your feature branch. If you do a standard `merge`,
it will interleave the changes for your feature with changes from others. This may pollute your pull request, cause future merge conflicts
that make it difficult to separate out your changes, and create a large merge commit which unnecessarily increases the repository size.

Essentially, rebasing rewrites history to say that the commits in your branch are based on the current state of the branch you're
rebasing on (usually, `master`). It pulls all the commits from the specified branch into your branch, then applies your commits
on top one by one and prompts you to fix any merge conflicts encountered with each commit.

To update `master` and then perform a rebase on your feature branch (the backup step is optional), do the following.

```
> git checkout master
> git pull
> git checkout my-feature
> git branch -f backup/my-feature
> git rebase master
```

This may succeed without intervention, or it may present merge conflicts along the way. (If there are conflicts in files other than
ones you've edited or the rebase output says it's applying any commits other than yours, it's likely because you've previously
merged into this branch. Abort the rebase and return the branch to its previous state with `git rebase --abort`, and continue using
`merge` instead until you create a new branch.)

If Git presents a conflict, make the changes using an editor (or Visual Studio Code, which can highlight merge conflicts for you).
Finish handling each diff by adding all edited files and continuing the rebase:

```
> git add .
> git rebase --continue
```

If after building and testing all appears to be well, delete your local backup branch:

```
> git branch -D backup/my-feature
```

Note: There are various articles online recommending merging rather than rebasing. These articles are generally written with the
assumption that multiple people are committing to the same branch, which is only the case for our master branch or ship/hotfix branches.
For your personal feature branches, rebasing is preferred for the reasons already stated. (Don't switch between rebasing and merging
in the same branch--this may create problems.)

## Configuration

### Git aliases

Git allows creation of aliases for commonly used commands. Some examples are below. To use the examples, run `git config --global -e`
and paste them into the `[alias]` section in the config file (create the section if it doesn't exist).

```ini
[alias]
    aa = add -A
    # Amend the current commit to include any currently-staged files. Use -m to change message.
    amend = commit --amend --no-edit
    br = branch
    ci = commit
    co = checkout
    del = branch -D
    econfig = config --global -e
    # Shows history in a pretty format. Use arrows to scroll and q to exit.
    lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
    pushf = push -f
    pushup = push -u origin
    rb = rebase
    rbc = rebase --continue
    st = status
    # Please don't check in commits created this way!
    temp = commit -a -m "temporary"
    undo = "!git reset --soft HEAD~1; git reset"
    # Lists local branches and their corresponding upstream branches
    vv = branch -vv
```

For even more Git command convenience, you can set up an alias `g` for `git`.

- On Windows: make a file `g.bat` in your `PATH` with the following contents: `git %*`
- On Git Bash or Mac: run `echo "alias g=git" >> ~/.bash_profile` then `source ~/.bash_profile`

### Visual Studio Code

#### User settings

To open the user settings, press `Ctrl+Shift+P` (command palette) and search for "user settings".
The left pane shows detailed descriptions of all settings, but here are some potentially helpful ones:

```javascript
{
    // Show leading and trailing whitespace characters (helps see tab/space mismatches)
    "editor.renderWhitespace": "boundary",
    // Only show suggestions based on code analysis, not on words in the file
    "editor.wordBasedSuggestions": false,
    // Show path to open file in the window's title bar
    "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
    // Trim trailing whitespace on save (helps avoid lint errors)
    "files.trimTrailingWhitespace": true
}
```

#### Extensions

To open the extensions panel, press `Ctrl+Shift+X`. Some suggestions:

- _TSLint_ shows lint errors as you work (highly recommended!)
  - This requires tslint to be installed. On the command line: `npm install -g tslint`
- _Stylelint_ shows CSS linting errors as you work (highly recommended!)
- - _Prettier_ Enforces code formatting guidelines (highly recommended!)
- _Git Blame_
- _Git History (git log)_

#### Other tips

- Multi-root workspaces are useful for working across multiple Git repositories (or for working with particular sub-packages
  in a Rush-based repo like odsp-common, sp-client, or office-ui-fabric-react.) [More info here.](https://code.visualstudio.com/docs/editor/multi-root-workspaces)

## Fixing permissions

On Windows, if you accidentally run a command as admin, run the following from an admin command prompt to fix permissions:

```
> takeown /f D:\projectroot /r
> icacls D:\projectroot /reset /t /q
```
