# khanlab.github.io (khanlab.ca)

The website built using Jekyll and Github pages. Organization of the website is 
structured such that each page's associated data has a corresponding folder (if 
necessary) under `_data` and _`assets` (for images). The exception to this are
indivual pages, which are under `people/_posts`. Page templates and common 
elements are stored in `_layouts` and `_includes` respectively.

_A Jupyter notebook with a Github Actions cron job will be utilized to update 
recent publications on a monthly basis._

The design of the website and use of Jekyll was inspired by 
[nbclab.github.io](https://github.com/NBCLab/nbclab.github.io).

## Updating website

See below for instructions on modifying each page. To modify or update a page, 
please make the necessary changes make a pull request to the repository!

### `join`

This page contains information regarding recruitment. In the pages front matter, 
it includes 2 variables `postdoc_recruit` and `grad_recruit` - setting these to 
`true`/`false` will update the page with associated information.

For post-doc opportunities, updating the YAML file in `join/postdoc.yml` will add 
different available positions.

### `people`

This page contains all present and past lab members. Each member's profile can be 
found in a markdown file under `_posts`. Within the front matter of each these 
files, contains information such as email, department, a link to a profile picture 
(a placeholder is used if not provided). 

In order to facilitate sorting on the page, a `year-month-date` format has been 
utilized. The `year` and `date` are irrelevant, but the `month` is used to identify 
the member's role (e.g. Post-doc vs PhD). the mapping can be seen below:

```
01 - Staff
02 - Post-doc
03 - PhD Student
04 - Master's Student
05 - Undergraduate Student
```

A template has been drawn up and can be found in the `people/_drafts` directory. 

By clicking on each user's profile picture, a window will pop up with information 
in detail, including a short blurb about the user, if provided.

### `news`

Similar to people, `posts` (found under `news/_posts`) are used to create articles. However, the date used here is important as it is used to sort and grab the latest articles.

### `publications`

A Jupyter notebook is used to grab all publications. Github is used to automate this process. This is updated monthly, and is currently set to display the 3 most recent articles.