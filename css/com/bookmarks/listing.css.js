import {css} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import commonCSS from '/vendor/beaker-app-stdlib/css/common.css.js'
import tooltipCSS from '/vendor/beaker-app-stdlib/css/tooltip.css.js'

const cssStr = css`
${commonCSS}
${tooltipCSS}

:host {
  display: block;
  user-select: none;
  width: 810px;
}

.favicon {
  width: 20px;
  height: 20px;
}

.row {
  padding: 20px;
  width: 100%;
  height: auto;
  min-height: 50px;
}

.col.pinned {
  overflow: visible; /* for tooltips */
  margin-right: 0;
}

.pin-btn {
  cursor: pointer;
  display: inline-block;
  padding: 6px 9px;
  border-radius: 2px;
  font-size: 12px;
  color: rgba(0,0,0,.5);
}

.pin-btn span {
  color: transparent;
  -webkit-text-stroke: 1px #bbb;
}

.pin-btn:hover {
  background: rgba(0, 0, 0, 0.075);
}

.pin-btn:hover span,
.pin-btn.pressed span {
  color: inherit;
  -webkit-text-stroke: 0;
}

.row .buttons .btn {
  visibility: hidden;
  color: rgba(0,0,0,.5);
}

.row:hover .buttons .btn {
  visibility: visible;
  color: rgba(0,0,0,.5);
}

.row .visibility {
  color: #bbb;
}

.row .visibility img {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  object-fit: cover;
}

.title-line,
.description-line {
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title-line {
  font-size: 15px;
  font-weight: 500;
}

.description-line {
  font-size: 14px;
  color: rgba(0,0,0,.7);
  white-space: normal;
}

.tags-line span {
  color: green;
  margin-right: 7px;
  font-size: 10px;
}

.extended-info > :last-child {
  margin-bottom: 0;
}
`
export default cssStr