var landing = StudioWidgetWrapper.extend({
  /*
   * Triggered when initializing a widget and will have the code that invokes rendering of the widget
   * setParentContainer(JQueryParentContainerDOM) - binds event to this container
   * setItemContainer(JQueryItemContainerDOM) - binds studio item events for respective item containers
   * bindEvents() - binds the studio event to this widget
   */
  init: function () {
    var thisObj = this;
    thisObj._super.apply(thisObj, arguments);
    thisObj.render();
    if (typeof Studio != "undefined" && Studio) {
    }
  },

  /*
   * Triggered from init method and is used to render the widget
   */
  render: function () {
    var thisObj = this;
    var widgetProperties = thisObj.getProperties();
    var elem = thisObj.getContainer();
    var items = thisObj.getItems();
    var connectorProperties = thisObj.getConnectorProperties();

    /*
     * API to get base path of your uploaded widget API file
     */
    var widgetBasePath = thisObj.getWidgetBasePath();

    if (elem) {
      var containerDiv = $(".scfClientRenderedContainer", elem);
      if (containerDiv.length) {
        $(containerDiv).empty();
      } else {
        containerDiv = document.createElement("div");
        containerDiv.className = "scfClientRenderedContainer";
        $(elem).append(containerDiv);
      }

      Vue.createApp({
        data() {
          return {
            name: widgetProperties.parama || "Bingo Studio",
            backgroundOne: widgetBasePath + `assets/img/bg-01.jpg`,
            callToAction: widgetBasePath + `assets/img/call-to-action.jpg`,
            callToAction2: widgetBasePath + `assets/img/call-to-action-2.jpg`,
            callToAction3: widgetBasePath + `assets/img/call-to-action-3.jpg`,
            coffeeGlassImage: widgetBasePath + `assets/img/coffee-glass.jpg`,
            iceMountainImage: widgetBasePath + `assets/img/ice-mountain.jpg`,
            mobileScreenImage: widgetBasePath + `assets/img/mobile-screen.png`,
            peopleImage: widgetBasePath + `assets/img/people.jpg`,
            personOneImage: widgetBasePath + `assets/img/person-1.png`,
            personTwoImage: widgetBasePath + `assets/img/person-2.png`,
            personThreeImage: widgetBasePath + `assets/img/person-3.png`,
          };
        },
      }).mount($("#widgetVue3Template", elem)[0]);
    }

    /*
     * API to refresh the previously bound events when a resize or orientation change occurs.
     *  thisObj.sksRefreshEvents(ItemIdx);
     * ItemIdx (Optional) - To refresh events for a specific item. Default value is 0.
     */
    $(window).resize(function () {
      thisObj.sksRefreshEvents();
    });
  },
});
