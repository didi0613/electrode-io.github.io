"use strict";

function Gitreleases() {
  this.repos = new GitRepos();
  this.releasesHeaderId = "release-notes";
}

Gitreleases.prototype.run = function() {
  var self = this;
  self.repos.getReleaseNotes().then(function(list){
    self.render(list);
  });
};

Gitreleases.prototype.render = function(list) {
  var headerElement = document.getElementById(this.releasesHeaderId);
  headerElement.appendChild(this.createReleaseName(list));
}

Gitreleases.prototype.createReleaseName = function(list) {
  var releaseName = document.createElement("a");
  releaseName.setAttribute("href", list.html_url);
  releaseName.innerHTML = list.tag_name;
  return releaseName;
};

var releases = new Gitreleases();
releases.run();
