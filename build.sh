git submodule update --init  # this gets the submodule repo at the commit it was when the parent committed
cd component
git fetch; git checkout master  # actually update the submodule
cd -
