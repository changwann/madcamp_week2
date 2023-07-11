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
    console.log(typeof(array))
    console.log("-------------------")
    console.log(user._id.toString())
    if (array.includes(user._id.toString())) {
      return `<div><form action="/stories/${storyId}/likes/delete" method="post">
      <button style="background-color: red darken -1;">좋아요취소
      </button>  좋아요를 누른 페이지입니다!</form> </div>`;
    } else {
      return `<form action="/stories/${storyId}/likes" method="post">
      <button style="background-color: red darken -1;">
        <i class="far fa-heart"></i> 좋아요
      </button>
    </form>`;
    }
  },
};

