function fetchInventory() {
  let result = [];
  let lessonId = 0;

  let res = fetch("../../course-list-dom.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      let parser = new DOMParser();
      const doc3 = parser.parseFromString(text, "text/html");
      let courseSection = doc3.querySelectorAll(".course-section");

      courseSection.forEach((course) => {
        let session = {};
        let lessonsArr = [];
        let lessonlinks = course.querySelectorAll(".section-list .lesson-link");

        session["session"] = course.querySelector(".section-title").textContent;
        lessonlinks.forEach((lessonLink) => {
          // lessonsArr.push(lessonLink.textContent.replace(/\r?\n|\r/g, ""));
          lessonsArr.push({
            id: ++lessonId,
            title: lessonLink.textContent.replace(/\r?\n|\r/g, ""),
          });
        });

        session["lessons"] = lessonsArr;
        result.push(session);
      });

      console.log(result);

      return result;
    });

  //   const printAddress = async () => {
  //     const a = await res;
  //     console.log(a);
  //   };

  //   fetch("../../course-list-dom.html")
  //     .then((res) => res.text())
  //     .then((text) => {
  //       const parser = new DOMParser();
  //       const doc3 = parser.parseFromString(text, "text/html");
  //       const courseSection = doc3.querySelectorAll(".course-section");

  //       courseSection.forEach((course) => {
  //         let session = {};
  //         let lessonsArr = [];
  //         let lessonlinks = course.querySelectorAll(".section-list .lesson-link");

  //         session["session"] = course.querySelector(".section-title").textContent;
  //         lessonlinks.forEach((lessonLink) => {
  //           // lessonsArr.push(lessonLink.textContent.replace(/\r?\n|\r/g, ""));
  //           lessonsArr.push({
  //             id: ++lessonId,
  //             title: lessonLink.textContent.replace(/\r?\n|\r/g, ""),
  //           });
  //         });

  //         session["lessons"] = lessonsArr;
  //         result.push(session);
  //       });

  //       console.log(result);

  //       return result;
  //     });

  //   return printAddress();
}

export default fetchInventory;
