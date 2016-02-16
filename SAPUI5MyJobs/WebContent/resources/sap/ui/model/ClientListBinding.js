/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./FilterType','./ListBinding','./FilterProcessor','./SorterProcessor'],function(q,F,L,a,S){"use strict";var C=L.extend("sap.ui.model.ClientListBinding",{constructor:function(m,p,c,s,f,P){L.apply(this,arguments);this.bIgnoreSuspend=false;this.update();},metadata:{publicMethods:["getLength"]}});C.prototype._getContexts=function(s,l){if(!s){s=0;}if(!l){l=Math.min(this.iLength,this.oModel.iSizeLimit);}var e=Math.min(s+l,this.aIndices.length),c,b=[],p=this.oModel.resolve(this.sPath,this.oContext);if(p&&!q.sap.endsWith(p,"/")){p+="/";}for(var i=s;i<e;i++){c=this.oModel.getContext(p+this.aIndices[i]);b.push(c);}return b;};C.prototype.setContext=function(c){if(this.oContext!=c){this.oContext=c;if(this.isRelative()){this.update();this._fireChange({reason:sap.ui.model.ChangeReason.Context});}}};C.prototype.getLength=function(){return this.iLength;};C.prototype._getLength=function(){return this.aIndices.length;};C.prototype.updateIndices=function(){this.aIndices=[];for(var i=0;i<this.oList.length;i++){this.aIndices.push(i);}};C.prototype.sort=function(s){if(!s){this.aSorters=null;this.updateIndices();this.applyFilter();}else{if(s instanceof sap.ui.model.Sorter){s=[s];}this.aSorters=s;this.applySort();}this.bIgnoreSuspend=true;this._fireChange({reason:sap.ui.model.ChangeReason.Sort});this._fireSort({sorter:s});this.bIgnoreSuspend=false;return this;};C.prototype.applySort=function(){var t=this;if(!this.aSorters||this.aSorters.length==0){return;}this.aIndices=S.apply(this.aIndices,this.aSorters,function(r,p){return t.oModel.getProperty(p,t.oList[r]);});};C.prototype.filter=function(f,s){this.updateIndices();if(f instanceof sap.ui.model.Filter){f=[f];}if(s==F.Application){this.aApplicationFilters=f||[];}else if(s==F.Control){this.aFilters=f||[];}else{this.aFilters=f||[];this.aApplicationFilters=[];}f=this.aFilters.concat(this.aApplicationFilters);if(f.length==0){this.aFilters=[];this.aApplicationFilters=[];this.iLength=this._getLength();}else{this.applyFilter();}this.applySort();this.bIgnoreSuspend=true;this._fireChange({reason:sap.ui.model.ChangeReason.Filter});if(s==F.Application){this._fireFilter({filters:this.aApplicationFilters});}else{this._fireFilter({filters:this.aFilters});}this.bIgnoreSuspend=false;return this;};C.prototype.applyFilter=function(){if(!this.aFilters){return;}var f=this.aFilters.concat(this.aApplicationFilters),t=this;this.aIndices=a.apply(this.aIndices,f,function(r,p){return t.oModel.getProperty(p,t.oList[r]);});this.iLength=this.aIndices.length;};C.prototype.getDistinctValues=function(p){var r=[],m={},v,t=this;q.each(this.oList,function(i,c){v=t.oModel.getProperty(p,c);if(!m[v]){m[v]=true;r.push(v);}});return r;};return C;},true);