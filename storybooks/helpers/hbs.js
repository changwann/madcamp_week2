const moment = require("moment-timezone");

module.exports = {
  formatDate: function (date, format) {
    return moment(date).tz("Asia/Seoul").format(format);
  },
  truncate: function (str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  },
  stripTags: function (input) {
    return input.replace(/<(?:.|\n)*?>/gm, "");
  },
  editIcon: function (storyUser, loggedUser, storyId, floating = true) {
    if (storyUser._id.toString() == loggedUser._id.toString()) {
      if (floating) {
        return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab red darken-3"><i class="fas fa-edit fa-small"></i></a>`;
      } else {
        return `<a href="/stories/edit/${storyId}"><i class="fas fa-edit"></i></a>`;
      }
    } else {
      return "";
    }
  },
  select: function (selected, options) {
    return options
      .fn(this)
      .replace(
        new RegExp(' value="' + selected + '"'),
        '$& selected="selected"'
      )
      .replace(
        new RegExp(">" + selected + "</option>"),
        ' selected="selected"$&'
      );
  },
  likeBtn: function (array, user, storyId) {
    console.log(array)
    console.log("-------------------")
    console.log(user._id)
    console.log(user._id.toString())
    console.log(typeof(user._id))
    if (array.includes(user._id.toString())) {
      return `<div><i class="fas fa-heart"></i>You Liked this page!</div>`;
    } else {
      return `<form action="/stories/${storyId}/likes" method="post"><button><i class="far fa-heart"></i>Click to Like</button></form>`;
    }
  },
};
