/*
 *  Copyright (c) 2014 The WebRTC project authors. All Rights Reserved.
 *  Copyright (c) 2014-2016 Doubango Telecom. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
window.performance = window.performance || {};
window.performance.now = window.performance.now || (function () { var now = Date.now(); return function () { return Date.now() - now; } })();
window.URL = window.URL || window.webkitURL;

function drawImage(context, video, x, y, width, height) {
    context.drawImage(video, x, y, width, height);
}
function attachEventListener(video, type, listener, useCapture) {
    video.addEventListener(type, listener, useCapture);
}

function attachMediaStream(element, stream) {
    element.srcObject = stream;
    element.play();
    return element;
};

function reattachMediaStream(to, from) {
    to.srcObject = from.srcObject;
    to.play();
};

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia;