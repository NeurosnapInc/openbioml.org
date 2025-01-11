/**
 * Scrolls the window to a specified element.
 * @param {Event}  event   The event object that triggered the scroll effect (optional)
 * @param {String} element The element selector to scroll to
 * @param {int}  offset  Height offset in pixels for something like a nav bar
 */
function scrollTo_(event=null, element, offset=0) {
  console.log(event);
  if (event) {
    event.preventDefault();
  }
  if (element.startsWith("#")) {
    window.history.pushState({id:"1"}, "tmp", location.href.replace(/#.*/g, "") + element.split(" ")[0])
  }
  element = document.querySelector(element);
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop-offset
  });
}