// Kiosk API of Kiosk Pro Enterprise Developer (4.3.2713)

// File API:
function writeToFile(fileName,data,callback) {document.location="kioskpro://writeToFile&" + encodeURIComponent(fileName) + "?" + encodeURIComponent(data) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['writeToFile']=function(fileName,data,callback) {document.location="kioskpro://writeToFile&" + encodeURIComponent(fileName) + "?" + encodeURIComponent(data) + "?" + encodeURIComponent(callback)};
}

function fileExists(filename,callback) {document.location="kioskpro://fileExists&" + encodeURIComponent(filename) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['fileExists']=function(filename,callback) {document.location="kioskpro://fileExists&" + encodeURIComponent(filename) + "?" + encodeURIComponent(callback)};
}

function deleteFile(filename,callback) {document.location="kioskpro://deleteFile&" + encodeURIComponent(filename) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['deleteFile']=function(filename,callback) {document.location="kioskpro://deleteFile&" + encodeURIComponent(filename) + "?" + encodeURIComponent(callback)};
}

// Photo & Video API:
function saveScreenToPng(filename,x,y,width,height,callback) {document.location="kioskpro://saveScreenToPng&" + encodeURIComponent(filename) + "?" + encodeURIComponent(x) + "?" + encodeURIComponent(y) + "?" + encodeURIComponent(width) + "?" + encodeURIComponent(height) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['saveScreenToPng']=function(filename,x,y,width,height,callback) {document.location="kioskpro://saveScreenToPng&" + encodeURIComponent(filename) + "?" + encodeURIComponent(x) + "?" + encodeURIComponent(y) + "?" + encodeURIComponent(width) + "?" + encodeURIComponent(height) + "?" + encodeURIComponent(callback)};
}

function kp_PhotoVideo_setCameraType(shouldUseFrontCamera,callback) {document.location="kioskpro://kp_PhotoVideo_setCameraType&" + encodeURIComponent(shouldUseFrontCamera) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_PhotoVideo_setCameraType']=function(shouldUseFrontCamera,callback) {document.location="kioskpro://kp_PhotoVideo_setCameraType&" + encodeURIComponent(shouldUseFrontCamera) + "?" + encodeURIComponent(callback)};
}

function kp_PhotoVideo_getCameraType(callback) {document.location="kioskpro://kp_PhotoVideo_getCameraType&" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_PhotoVideo_getCameraType']=function(callback) {document.location="kioskpro://kp_PhotoVideo_getCameraType&" + encodeURIComponent(callback)};
}

function takePhotoToFile(filename,callback) {document.location="kioskpro://takePhotoToFile&" + encodeURIComponent(filename) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['takePhotoToFile']=function(filename,callback) {document.location="kioskpro://takePhotoToFile&" + encodeURIComponent(filename) + "?" + encodeURIComponent(callback)};
}

function takePhotoWithCountdownToFile(filename,callback,counter,message,showingTime) {document.location="kioskpro://takePhotoWithCountdownToFile&" + encodeURIComponent(filename) + "?" + encodeURIComponent(callback) + "?" + encodeURIComponent(counter) + "?" + encodeURIComponent(message) + "?" + encodeURIComponent(showingTime)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['takePhotoWithCountdownToFile']=function(filename,callback,counter,message,showingTime) {document.location="kioskpro://takePhotoWithCountdownToFile&" + encodeURIComponent(filename) + "?" + encodeURIComponent(callback) + "?" + encodeURIComponent(counter) + "?" + encodeURIComponent(message) + "?" + encodeURIComponent(showingTime)};
}

function takeVideoToFile(filename,callback) {document.location="kioskpro://takeVideoToFile&" + encodeURIComponent(filename) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['takeVideoToFile']=function(filename,callback) {document.location="kioskpro://takeVideoToFile&" + encodeURIComponent(filename) + "?" + encodeURIComponent(callback)};
}

// iMag2 Card Reader API:
function getReaderData(callback) {document.location="kioskpro://getReaderData&" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['getReaderData']=function(callback) {document.location="kioskpro://getReaderData&" + encodeURIComponent(callback)};
}

function kp_iMagCardReader_requestSwipe(swipeInfo) {document.location="kioskpro://kp_iMagCardReader_requestSwipe&" + encodeURIComponent(swipeInfo)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_iMagCardReader_requestSwipe']=function(swipeInfo) {document.location="kioskpro://kp_iMagCardReader_requestSwipe&" + encodeURIComponent(swipeInfo)};
}

function kp_iMagCardReader_requestStateOfSupporting() {document.location="kioskpro://kp_iMagCardReader_requestStateOfSupporting"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_iMagCardReader_requestStateOfSupporting']=function() {document.location="kioskpro://kp_iMagCardReader_requestStateOfSupporting"};
}

function kp_iMagCardReader_requestStateOfConnection() {document.location="kioskpro://kp_iMagCardReader_requestStateOfConnection"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_iMagCardReader_requestStateOfConnection']=function() {document.location="kioskpro://kp_iMagCardReader_requestStateOfConnection"};
}

// UniMag2 Card Reader API:
function kp_UniMag2CardReader_requestSwipe(swipeInfo) {document.location="kioskpro://kp_UniMag2CardReader_requestSwipe&" + encodeURIComponent(swipeInfo)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_UniMag2CardReader_requestSwipe']=function(swipeInfo) {document.location="kioskpro://kp_UniMag2CardReader_requestSwipe&" + encodeURIComponent(swipeInfo)};
}

function kp_UniMag2CardReader_requestStateOfSupporting() {document.location="kioskpro://kp_UniMag2CardReader_requestStateOfSupporting"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_UniMag2CardReader_requestStateOfSupporting']=function() {document.location="kioskpro://kp_UniMag2CardReader_requestStateOfSupporting"};
}

function kp_UniMag2CardReader_requestStateOfConnection() {document.location="kioskpro://kp_UniMag2CardReader_requestStateOfConnection"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_UniMag2CardReader_requestStateOfConnection']=function() {document.location="kioskpro://kp_UniMag2CardReader_requestStateOfConnection"};
}

// MPS API:
function kp_UniMag2CardReader_mps_doCreditSaleOperation(amount,invoiceNumber) {document.location="kioskpro://kp_UniMag2CardReader_mps_doCreditSaleOperation&" + encodeURIComponent(amount) + "?" + encodeURIComponent(invoiceNumber)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_UniMag2CardReader_mps_doCreditSaleOperation']=function(amount,invoiceNumber) {document.location="kioskpro://kp_UniMag2CardReader_mps_doCreditSaleOperation&" + encodeURIComponent(amount) + "?" + encodeURIComponent(invoiceNumber)};
}

function kp_UniMag2CardReader_mps_generateFullReportToFile(fileName,callback) {document.location="kioskpro://kp_UniMag2CardReader_mps_generateFullReportToFile&" + encodeURIComponent(fileName) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_UniMag2CardReader_mps_generateFullReportToFile']=function(fileName,callback) {document.location="kioskpro://kp_UniMag2CardReader_mps_generateFullReportToFile&" + encodeURIComponent(fileName) + "?" + encodeURIComponent(callback)};
}

function kp_UniMag2CardReader_mps_getSettings() {document.location="kioskpro://kp_UniMag2CardReader_mps_getSettings"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_UniMag2CardReader_mps_getSettings']=function() {document.location="kioskpro://kp_UniMag2CardReader_mps_getSettings"};
}

function kp_UniMag2CardReader_mps_requestLastRegisteredOperation() {document.location="kioskpro://kp_UniMag2CardReader_mps_requestLastRegisteredOperation"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_UniMag2CardReader_mps_requestLastRegisteredOperation']=function() {document.location="kioskpro://kp_UniMag2CardReader_mps_requestLastRegisteredOperation"};
}

function kp_UniMag2CardReader_mps_cancelSwipe() {document.location="kioskpro://kp_UniMag2CardReader_mps_cancelSwipe"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_UniMag2CardReader_mps_cancelSwipe']=function() {document.location="kioskpro://kp_UniMag2CardReader_mps_cancelSwipe"};
}

// ZBar Scanner API:
function kp_ZBarScanner_startScan() {document.location="kioskpro://kp_ZBarScanner_startScan"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ZBarScanner_startScan']=function() {document.location="kioskpro://kp_ZBarScanner_startScan"};
}

function kp_ZBarScanner_cancelScan() {document.location="kioskpro://kp_ZBarScanner_cancelScan"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ZBarScanner_cancelScan']=function() {document.location="kioskpro://kp_ZBarScanner_cancelScan"};
}

function kp_ZBarScanner_requestStateOfSupporting() {document.location="kioskpro://kp_ZBarScanner_requestStateOfSupporting"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ZBarScanner_requestStateOfSupporting']=function() {document.location="kioskpro://kp_ZBarScanner_requestStateOfSupporting"};
}

// Bluetooth BarCode Scanner API:
function kp_BluetoothBarcodeScanner_requestAcceptingData(alert_title,alert_message,wait_in_seconds) {document.location="kioskpro://kp_BluetoothBarcodeScanner_requestAcceptingData&" + encodeURIComponent(alert_title) + "?" + encodeURIComponent(alert_message) + "?" + encodeURIComponent(wait_in_seconds)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_BluetoothBarcodeScanner_requestAcceptingData']=function(alert_title,alert_message,wait_in_seconds) {document.location="kioskpro://kp_BluetoothBarcodeScanner_requestAcceptingData&" + encodeURIComponent(alert_title) + "?" + encodeURIComponent(alert_message) + "?" + encodeURIComponent(wait_in_seconds)};
}

function kp_BluetoothBarcodeScanner_requestSilentAcceptingData() {document.location="kioskpro://kp_BluetoothBarcodeScanner_requestSilentAcceptingData"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_BluetoothBarcodeScanner_requestSilentAcceptingData']=function() {document.location="kioskpro://kp_BluetoothBarcodeScanner_requestSilentAcceptingData"};
}

function kp_BluetoothBarcodeScanner_requestStateOfSupporting() {document.location="kioskpro://kp_BluetoothBarcodeScanner_requestStateOfSupporting"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_BluetoothBarcodeScanner_requestStateOfSupporting']=function() {document.location="kioskpro://kp_BluetoothBarcodeScanner_requestStateOfSupporting"};
}

function kp_BluetoothBarcodeScanner_requestStateOfConnection() {document.location="kioskpro://kp_BluetoothBarcodeScanner_requestStateOfConnection"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_BluetoothBarcodeScanner_requestStateOfConnection']=function() {document.location="kioskpro://kp_BluetoothBarcodeScanner_requestStateOfConnection"};
}

function kp_BluetoothBarcodeScanner_connect() {document.location="kioskpro://kp_BluetoothBarcodeScanner_connect"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_BluetoothBarcodeScanner_connect']=function() {document.location="kioskpro://kp_BluetoothBarcodeScanner_connect"};
}

function kp_BluetoothBarcodeScanner_disconnect() {document.location="kioskpro://kp_BluetoothBarcodeScanner_disconnect"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_BluetoothBarcodeScanner_disconnect']=function() {document.location="kioskpro://kp_BluetoothBarcodeScanner_disconnect"};
}

// Common API:
function kp_requestKioskId(callback) {document.location="kioskpro://kp_requestKioskId&" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_requestKioskId']=function(callback) {document.location="kioskpro://kp_requestKioskId&" + encodeURIComponent(callback)};
}

// Common Printer API:
function print() {document.location="kioskpro://print"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['print']=function() {document.location="kioskpro://print"};
}

// AirPrinter API:
function kp_AirPrinter_requestStateOfSupporting() {document.location="kioskpro://kp_AirPrinter_requestStateOfSupporting"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_AirPrinter_requestStateOfSupporting']=function() {document.location="kioskpro://kp_AirPrinter_requestStateOfSupporting"};
}

function kp_AirPrinter_print() {document.location="kioskpro://kp_AirPrinter_print"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_AirPrinter_print']=function() {document.location="kioskpro://kp_AirPrinter_print"};
}

function kp_AirPrinter_printPdf(filename) {document.location="kioskpro://kp_AirPrinter_printPdf&" + encodeURIComponent(filename)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_AirPrinter_printPdf']=function(filename) {document.location="kioskpro://kp_AirPrinter_printPdf&" + encodeURIComponent(filename)};
}

// StarPrinter API:
function kp_StarPrinter_requestStateOfSupporting() {document.location="kioskpro://kp_StarPrinter_requestStateOfSupporting"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_StarPrinter_requestStateOfSupporting']=function() {document.location="kioskpro://kp_StarPrinter_requestStateOfSupporting"};
}

function kp_StarPrinter_requestStatusOfPrinter() {document.location="kioskpro://kp_StarPrinter_requestStatusOfPrinter"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_StarPrinter_requestStatusOfPrinter']=function() {document.location="kioskpro://kp_StarPrinter_requestStatusOfPrinter"};
}

function kp_StarPrinter_printText(text,cut) {document.location="kioskpro://kp_StarPrinter_printText&" + encodeURIComponent(text) + "?" + encodeURIComponent(cut)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_StarPrinter_printText']=function(text,cut) {document.location="kioskpro://kp_StarPrinter_printText&" + encodeURIComponent(text) + "?" + encodeURIComponent(cut)};
}

function kp_StarPrinter_printHtml(elementId,cut) {document.location="kioskpro://kp_StarPrinter_printHtml&" + encodeURIComponent(elementId) + "?" + encodeURIComponent(cut)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_StarPrinter_printHtml']=function(elementId,cut) {document.location="kioskpro://kp_StarPrinter_printHtml&" + encodeURIComponent(elementId) + "?" + encodeURIComponent(cut)};
}

function kp_StarPrinter_printCode39(text,cut) {document.location="kioskpro://kp_StarPrinter_printCode39&" + encodeURIComponent(text) + "?" + encodeURIComponent(cut)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_StarPrinter_printCode39']=function(text,cut) {document.location="kioskpro://kp_StarPrinter_printCode39&" + encodeURIComponent(text) + "?" + encodeURIComponent(cut)};
}

function kp_StarPrinter_printCode93(text,cut) {document.location="kioskpro://kp_StarPrinter_printCode93&" + encodeURIComponent(text) + "?" + encodeURIComponent(cut)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_StarPrinter_printCode93']=function(text,cut) {document.location="kioskpro://kp_StarPrinter_printCode93&" + encodeURIComponent(text) + "?" + encodeURIComponent(cut)};
}

function kp_StarPrinter_printCode128(text,cut) {document.location="kioskpro://kp_StarPrinter_printCode128&" + encodeURIComponent(text) + "?" + encodeURIComponent(cut)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_StarPrinter_printCode128']=function(text,cut) {document.location="kioskpro://kp_StarPrinter_printCode128&" + encodeURIComponent(text) + "?" + encodeURIComponent(cut)};
}

function kp_StarPrinter_printQRCode(text,cut) {document.location="kioskpro://kp_StarPrinter_printQRCode&" + encodeURIComponent(text) + "?" + encodeURIComponent(cut)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_StarPrinter_printQRCode']=function(text,cut) {document.location="kioskpro://kp_StarPrinter_printQRCode&" + encodeURIComponent(text) + "?" + encodeURIComponent(cut)};
}

// Memory & Privacy API:
function kp_Browser_clearCookies() {document.location="kioskpro://kp_Browser_clearCookies"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_Browser_clearCookies']=function() {document.location="kioskpro://kp_Browser_clearCookies"};
}

function kp_Browser_clearCache() {document.location="kioskpro://kp_Browser_clearCache"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_Browser_clearCache']=function() {document.location="kioskpro://kp_Browser_clearCache"};
}

// External Screen API:
function kp_ExternalScreen_requestStateOfConnection() {document.location="kioskpro://kp_ExternalScreen_requestStateOfConnection"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_requestStateOfConnection']=function() {document.location="kioskpro://kp_ExternalScreen_requestStateOfConnection"};
}

function kp_ExternalScreen_requestProperties(callback) {document.location="kioskpro://kp_ExternalScreen_requestProperties&" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_requestProperties']=function(callback) {document.location="kioskpro://kp_ExternalScreen_requestProperties&" + encodeURIComponent(callback)};
}

function kp_ExternalScreen_setScreenMode(width,height,callback) {document.location="kioskpro://kp_ExternalScreen_setScreenMode&" + encodeURIComponent(width) + "?" + encodeURIComponent(height) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_setScreenMode']=function(width,height,callback) {document.location="kioskpro://kp_ExternalScreen_setScreenMode&" + encodeURIComponent(width) + "?" + encodeURIComponent(height) + "?" + encodeURIComponent(callback)};
}

function kp_ExternalScreen_setOverscanCompensationMode(mode,callback) {document.location="kioskpro://kp_ExternalScreen_setOverscanCompensationMode&" + encodeURIComponent(mode) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_setOverscanCompensationMode']=function(mode,callback) {document.location="kioskpro://kp_ExternalScreen_setOverscanCompensationMode&" + encodeURIComponent(mode) + "?" + encodeURIComponent(callback)};
}

function kp_ExternalScreen_connectToScreen() {document.location="kioskpro://kp_ExternalScreen_connectToScreen"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_connectToScreen']=function() {document.location="kioskpro://kp_ExternalScreen_connectToScreen"};
}

function kp_ExternalScreen_disconnectFromScreen() {document.location="kioskpro://kp_ExternalScreen_disconnectFromScreen"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_disconnectFromScreen']=function() {document.location="kioskpro://kp_ExternalScreen_disconnectFromScreen"};
}

function kp_ExternalScreen_openDocument(filePath,callback) {document.location="kioskpro://kp_ExternalScreen_openDocument&" + encodeURIComponent(filePath) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_openDocument']=function(filePath,callback) {document.location="kioskpro://kp_ExternalScreen_openDocument&" + encodeURIComponent(filePath) + "?" + encodeURIComponent(callback)};
}

function kp_ExternalScreen_setBrowserBgColor(bgColor,callback) {document.location="kioskpro://kp_ExternalScreen_setBrowserBgColor&" + encodeURIComponent(bgColor) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_setBrowserBgColor']=function(bgColor,callback) {document.location="kioskpro://kp_ExternalScreen_setBrowserBgColor&" + encodeURIComponent(bgColor) + "?" + encodeURIComponent(callback)};
}

function kp_ExternalScreen_getBrowserBgColor(callback) {document.location="kioskpro://kp_ExternalScreen_getBrowserBgColor&" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_getBrowserBgColor']=function(callback) {document.location="kioskpro://kp_ExternalScreen_getBrowserBgColor&" + encodeURIComponent(callback)};
}

function kp_ExternalScreen_setPlayVideoParams(fadeDuration,fadeBgColor,callback) {document.location="kioskpro://kp_ExternalScreen_setPlayVideoParams&" + encodeURIComponent(fadeDuration) + "?" + encodeURIComponent(fadeBgColor) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_setPlayVideoParams']=function(fadeDuration,fadeBgColor,callback) {document.location="kioskpro://kp_ExternalScreen_setPlayVideoParams&" + encodeURIComponent(fadeDuration) + "?" + encodeURIComponent(fadeBgColor) + "?" + encodeURIComponent(callback)};
}

function kp_ExternalScreen_getPlayVideoParams(callback) {document.location="kioskpro://kp_ExternalScreen_getPlayVideoParams&" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_getPlayVideoParams']=function(callback) {document.location="kioskpro://kp_ExternalScreen_getPlayVideoParams&" + encodeURIComponent(callback)};
}

function kp_ExternalScreen_playVideo(filePath,loop,callback) {document.location="kioskpro://kp_ExternalScreen_playVideo&" + encodeURIComponent(filePath) + "?" + encodeURIComponent(loop) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_playVideo']=function(filePath,loop,callback) {document.location="kioskpro://kp_ExternalScreen_playVideo&" + encodeURIComponent(filePath) + "?" + encodeURIComponent(loop) + "?" + encodeURIComponent(callback)};
}

function kp_ExternalScreen_requestNumberOfPdfPages(callback) {document.location="kioskpro://kp_ExternalScreen_requestNumberOfPdfPages&" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_requestNumberOfPdfPages']=function(callback) {document.location="kioskpro://kp_ExternalScreen_requestNumberOfPdfPages&" + encodeURIComponent(callback)};
}

function kp_ExternalScreen_showPdfPage(pageNumber,callback) {document.location="kioskpro://kp_ExternalScreen_showPdfPage&" + encodeURIComponent(pageNumber) + "?" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_showPdfPage']=function(pageNumber,callback) {document.location="kioskpro://kp_ExternalScreen_showPdfPage&" + encodeURIComponent(pageNumber) + "?" + encodeURIComponent(callback)};
}

function kp_ExternalScreen_requestNumberOfCurrentPdfPage(callback) {document.location="kioskpro://kp_ExternalScreen_requestNumberOfCurrentPdfPage&" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_ExternalScreen_requestNumberOfCurrentPdfPage']=function(callback) {document.location="kioskpro://kp_ExternalScreen_requestNumberOfCurrentPdfPage&" + encodeURIComponent(callback)};
}

// Audio Player API:
function kp_AudioPlayer_play(filePath,atTime,withVolume,repeat) {document.location="kioskpro://kp_AudioPlayer_play&" + encodeURIComponent(filePath) + "?" + encodeURIComponent(atTime) + "?" + encodeURIComponent(withVolume) + "?" + encodeURIComponent(repeat)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_AudioPlayer_play']=function(filePath,atTime,withVolume,repeat) {document.location="kioskpro://kp_AudioPlayer_play&" + encodeURIComponent(filePath) + "?" + encodeURIComponent(atTime) + "?" + encodeURIComponent(withVolume) + "?" + encodeURIComponent(repeat)};
}

function kp_AudioPlayer_stop() {document.location="kioskpro://kp_AudioPlayer_stop"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_AudioPlayer_stop']=function() {document.location="kioskpro://kp_AudioPlayer_stop"};
}

function kp_AudioPlayer_pause() {document.location="kioskpro://kp_AudioPlayer_pause"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_AudioPlayer_pause']=function() {document.location="kioskpro://kp_AudioPlayer_pause"};
}

function kp_AudioPlayer_resume() {document.location="kioskpro://kp_AudioPlayer_resume"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_AudioPlayer_resume']=function() {document.location="kioskpro://kp_AudioPlayer_resume"};
}

function kp_AudioPlayer_changeVolume(volume) {document.location="kioskpro://kp_AudioPlayer_changeVolume&" + encodeURIComponent(volume)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_AudioPlayer_changeVolume']=function(volume) {document.location="kioskpro://kp_AudioPlayer_changeVolume&" + encodeURIComponent(volume)};
}

function kp_AudioPlayer_changeCurrentTime(currentTime) {document.location="kioskpro://kp_AudioPlayer_changeCurrentTime&" + encodeURIComponent(currentTime)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_AudioPlayer_changeCurrentTime']=function(currentTime) {document.location="kioskpro://kp_AudioPlayer_changeCurrentTime&" + encodeURIComponent(currentTime)};
}

// Idle Timer API:
function kp_IdleTimer_fire() {document.location="kioskpro://kp_IdleTimer_fire"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_IdleTimer_fire']=function() {document.location="kioskpro://kp_IdleTimer_fire"};
}

// Dropbox API:
function kp_DBXSyncManager_sync() {document.location="kioskpro://kp_DBXSyncManager_sync"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_DBXSyncManager_sync']=function() {document.location="kioskpro://kp_DBXSyncManager_sync"};
}

function kp_DBXSyncManager_stopObservingChangesOfType(typeOfChanges) {document.location="kioskpro://kp_DBXSyncManager_stopObservingChangesOfType&" + encodeURIComponent(typeOfChanges)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_DBXSyncManager_stopObservingChangesOfType']=function(typeOfChanges) {document.location="kioskpro://kp_DBXSyncManager_stopObservingChangesOfType&" + encodeURIComponent(typeOfChanges)};
}

function kp_DBXSyncManager_startObservingChangesOfType(typeOfChanges) {document.location="kioskpro://kp_DBXSyncManager_startObservingChangesOfType&" + encodeURIComponent(typeOfChanges)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_DBXSyncManager_startObservingChangesOfType']=function(typeOfChanges) {document.location="kioskpro://kp_DBXSyncManager_startObservingChangesOfType&" + encodeURIComponent(typeOfChanges)};
}

function kp_DBXSyncManager_getTypeOfObservingChanges(callback) {document.location="kioskpro://kp_DBXSyncManager_getTypeOfObservingChanges&" + encodeURIComponent(callback)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_DBXSyncManager_getTypeOfObservingChanges']=function(callback) {document.location="kioskpro://kp_DBXSyncManager_getTypeOfObservingChanges&" + encodeURIComponent(callback)};
}

// iDynamo Card Reader API:
function kp_iDynamoCardReader_requestDeviceType() {document.location="kioskpro://kp_iDynamoCardReader_requestDeviceType"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_iDynamoCardReader_requestDeviceType']=function() {document.location="kioskpro://kp_iDynamoCardReader_requestDeviceType"};
}

function kp_iDynamoCardReader_requestStateOfConnection() {document.location="kioskpro://kp_iDynamoCardReader_requestStateOfConnection"};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_iDynamoCardReader_requestStateOfConnection']=function() {document.location="kioskpro://kp_iDynamoCardReader_requestStateOfConnection"};
}

function kp_iDynamoCardReader_requestSwipe(swipeInfo) {document.location="kioskpro://kp_iDynamoCardReader_requestSwipe&" + encodeURIComponent(swipeInfo)};
var _kp_i_, _kp_frames_special_;
_kp_frames_special_ = document.getElementsByTagName("iframe");
for (_kp_i_ = 0; _kp_i_ < n_kp_frames_special_.length; ++_kp_i_) {
	n_kp_frames_special_[_kp_i_].contentWindow['kp_iDynamoCardReader_requestSwipe']=function(swipeInfo) {document.location="kioskpro://kp_iDynamoCardReader_requestSwipe&" + encodeURIComponent(swipeInfo)};
}

