git clone
-resolve merge conflicts 

# Merge conflict : 
when both tries to change the same place in the file. 
- chose any one to resolve:
  -your change
  -remote change
  -or combine both 

# Amend

used to modify the most recent commit instead of creating a new one.

It’s very useful if you just committed something and realize you need to:

- Change the commit message

- Add forgotten files

- Correct a mistake
***git commit --amend -m "New commit message"***
- this command replaces the message of your last commit.


**Never amend a commit that’s already pushed to GitHub if others are using the repo. It rewrites history and can cause problems.

**Safe to use on local commits that haven’t been pushed yet.

***git commit --amend --no-edit*** 
--no-edit  , add new file(which was forgotten) but keeps the older commit message.

example: 

git add .
git commit -m "Initial commit"
# Oops! Forgot a file
git add src/components/Home.jsx
git commit --amend --no-edit


- Now Home.jsx is included in the same “Initial commit” instead of creating a new commit.