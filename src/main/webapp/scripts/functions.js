let cats=[];
let parent;
let child;
let res = [];
function sort(categories, curr) {
    if (categories.length == 0) {
        return res;
    }else {
        if (cats.length == 0) cats = categories.slice();
        if (categories.indexOf(curr) != -1) {
            categories.splice(categories.indexOf(curr), 1);
        }
        if (res.indexOf(curr) == -1) {
            res.push(curr);
        }
        if (categories.length == 0) {
            return res;
        } else {
            for (let i = 0; i < cats.length; i++) {
                let obj = cats[i];
                if (curr.parentId != 0 && curr.parentId == obj.categoryId) {
                    parent = obj;
                    break;
                } else {
                    parent = null;
                }
            }
            for (let i = 0; i < categories.length; i++) {
                let obj = categories[i];
                if (obj.parentId == curr.categoryId) {
                    child = obj;
                    sort(categories, child);
                }
            }
            if (parent != null) {
                sort(categories, parent);
            } else {
                for (let i = 0; i < categories.length; i++) {
                    let obj = categories[i];
                    if (obj.parentId == 0) {
                        sort(categories, obj);
                    }
                }
            }
            return res;
        }
    }
}