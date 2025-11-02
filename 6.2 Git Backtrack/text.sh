# Discard changes in the working directory for a file, reverting it to the last committed state
git checkout HEAD filename.txt

# Unstage changes of a file, keeping changes in working directory (remove from staging area)
git reset HEAD filename.txt

# Reset the current branch to a specific commit (commit_SHA), changing commit history and working directory if --hard flag used
git reset commit_SHA
