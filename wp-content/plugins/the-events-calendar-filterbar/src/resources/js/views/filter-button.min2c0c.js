/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

tribe.filterBar=tribe.filterBar||{},tribe.filterBar.filterButton={},function($,obj){"use strict";var $document=$(document);obj.selectors={actionDone:'[data-js="tribe-filter-bar__action-done"]',filterBarVertical:".tribe-events--filter-bar-vertical",filterBar:'[data-js~="tribe-filter-bar"]',filterButton:'[data-js~="tribe-events-filter-button"]',filterButtonActive:".tribe-events-c-events-bar__filter-button--active",filtersSliderContainer:'[data-js="tribe-filter-bar-filters-slider-container"]',select2ChoiceRemove:".select2-selection__choice__remove"},obj.handleResize=function(event){var $container=event.data.container,$filterBar=$container.find(obj.selectors.filterBar);if(0!==$filterBar.length){var state=$filterBar.data("tribeEventsState"),isMobile=$container.data("tribeEventsState").isMobile;isMobile||state.filterButtonDesktopInitialized?isMobile&&state.filterButtonDesktopInitialized&&(tribe.filterBar.filterBarState.closeFilterBar($container),state.filterButtonDesktopInitialized=!1,$filterBar.data("tribeEventsState",state)):($container.is(obj.selectors.filterBarVertical)&&tribe.filterBar.filterBarState.openFilterBar($container),state.filterButtonDesktopInitialized=!0,$filterBar.data("tribeEventsState",state))}},obj.handleClick=function(event){var $container=event.data.container;if($container.data("tribeEventsState").isMobile){var $target=$(event.target),isParentFilterBar=Boolean($target.closest(obj.selectors.filterBar).length),isParentFilterButton=Boolean($target.closest(obj.selectors.filterButton).length),isParentSelect2ChoiceRemove=Boolean($target.closest(obj.selectors.select2ChoiceRemove).length);isParentFilterBar||isParentFilterButton||isParentSelect2ChoiceRemove||tribe.filterBar.filterBarState.closeFilterBar($container)}},obj.handleActionDoneClick=function(event){tribe.filterBar.filterBarState.closeFilterBar(event.data.container)},obj.handleFilterButtonClick=function(event){var $container=event.data.container;event.data.target.is(obj.selectors.filterButtonActive)?tribe.filterBar.filterBarState.closeFilterBar($container):tribe.filterBar.filterBarState.openFilterBar($container);var data={container:$container};tribe.filterBar.filterBarSlider.handleResize({data:data})},obj.unbindEvents=function($container){var $filterButton=$container.find(obj.selectors.filterButton),$actionDone=$container.find(obj.selectors.actionDone);$filterButton.off("click",obj.handleFilterButtonClick),$actionDone.off("click",obj.handleActionDoneClick),$document.off("click",obj.handleClick),$container.off("resize.tribeEvents",obj.handleResize)},obj.bindEvents=function($container){var $filterButton=$container.find(obj.selectors.filterButton),$actionDone=$container.find(obj.selectors.actionDone);$filterButton.on("click",{target:$filterButton,actionDone:$actionDone,container:$container},obj.handleFilterButtonClick),$actionDone.on("click",{target:$actionDone,filterButton:$filterButton,container:$container},obj.handleActionDoneClick),$document.on("click",{container:$container},obj.handleClick),$container.on("resize.tribeEvents",{container:$container},obj.handleResize)},obj.initState=function($container){var $filterBar=$container.find(obj.selectors.filterBar);if(0!==$filterBar.length){var state={filterButtonDesktopInitialized:!$container.data("tribeEventsState").isMobile};$filterBar.data("tribeEventsState",state)}},obj.deinit=function(event){var $container=event.data.container;obj.unbindEvents($container),$container.off("beforeAjaxSuccess.tribeEvents",obj.deinit)},obj.init=function(event,index,$container){obj.initState($container),obj.bindEvents($container),$container.on("beforeAjaxSuccess.tribeEvents",{container:$container},obj.deinit)},obj.ready=function(){$document.on("afterSetup.tribeEvents",tribe.events.views.manager.selectors.container,obj.init)},$(obj.ready)}(jQuery,tribe.filterBar.filterButton);