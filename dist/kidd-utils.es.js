const l = (e, t) => {
  const n = [];
  if (!Array.isArray(e) || !e || !e.length) return n;
  const r = /* @__PURE__ */ new Map();
  for (let o = 0, u = e.length; o < u; o++) {
    const s = e[o];
    if (s instanceof Object) {
      if (!t) return e;
      r.has(s[t]) || (n.push(s), r.set(s[t], !0));
    } else
      r.has(s) || (n.push(s), r.set(s, !0));
  }
  return n;
}, f = (e = [], t) => {
  let n = t ?? "";
  return e != null && e.length && (n = e[0]), n;
}, g = (e = [], t) => {
  let n = t ?? "";
  return e != null && e.length && (n = e[e.length - 1]), n;
}, p = (e, t, n) => !e || !e.length ? [] : e.map((r) => ({ label: r[t] ?? "", value: r[n] ?? "" })) ?? [], w = (e, t) => {
  Object.keys(e).forEach((r) => {
    const o = e[r];
    e[r] = t && t[r] ? t[r] : Array.isArray(o) ? [] : typeof o == "string" ? "" : typeof o == "number" ? 0 : typeof o == "boolean" ? !1 : "";
  });
}, m = (e) => typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]", d = (e) => typeof e == "string" || Object.prototype.toString.call(e) === "[object String]", F = (e) => !(!e && e !== 0 || Array.isArray(e) && !e.length || Object.prototype.toString.call(e) === "[object Object]" && !Object.keys(e).length), y = (e) => !e || typeof e != "string" && typeof e != "number" ? !1 : /^1[3-9]\d{9}$/.test(e), S = (e) => !e || typeof e != "string" && typeof e != "number" ? !1 : /^(\d{3,4}[- ]?)?\d{7,8}$/.test(e), h = (e) => {
  const t = Number(e);
  return !isNaN(t) && t > 0 && t % 1 === 0;
}, a = (e) => {
  if (!e || e.length !== 18 || !/^\d{18}$/.test(e))
    return !1;
  const t = "10X98765432", n = e.slice(0, 17), r = n.slice(6, 4), o = n.slice(10, 2), u = n.slice(12, 2);
  if (!/^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/.test(r + o + u))
    return !1;
  let s = 0;
  for (let i = 0; i < 17; i++)
    s += parseInt(n.charAt(i), 10) * (i % 2 === 0 ? 1 : 3);
  const c = s % 11;
  return t.charAt(c) === e.charAt(17).toUpperCase();
}, b = (e) => /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F910}-\u{1F96B}\u{1F980}-\u{1F991}]/u.test(e), I = (e, t, n = "localStorage") => window[n] ? (window[n].setItem(e, JSON.stringify(t)), !0) : !1, x = (e, t, n = "localStorage", r) => {
  if (!window[n]) return !1;
  const o = {
    value: t,
    // 存储的值
    expireTime: r ? (/* @__PURE__ */ new Date()).getTime() + r : null
    // 过期时间
  };
  return window[n].setItem(e, JSON.stringify(o)), !0;
}, j = (e, t = "localStorage") => {
  if (!window[t]) return null;
  const n = window[t].getItem(e);
  return n && n != "undefined" && n != "null" ? JSON.parse(n) : null;
}, A = (e, t = "localStorage") => {
  if (!window[t]) return null;
  const n = window[t].getItem(e);
  if (n) {
    const r = JSON.parse(n);
    if (!r.expireTime || (/* @__PURE__ */ new Date()).getTime() < r.expireTime)
      return r.value;
    window[t].removeItem(e);
  }
  return null;
}, E = (e, t = "localStorage") => !window[t] || !window[t].getItem(e) ? !1 : (window[t].removeItem(e), !0), O = (e) => {
  e ? window[e].clear() : (window.localStorage.clear(), window.sessionStorage.clear());
};
export {
  O as clearStorage,
  A as getExpireStorageItem,
  f as getFirst,
  g as getLast,
  j as getStorageItem,
  w as handleReset,
  b as isEmoji,
  S as isFixedPhone,
  a as isIdCardNo,
  y as isMobile,
  F as isNotEmpty,
  m as isNumber,
  h as isPositiveInteger,
  d as isString,
  E as removeStorageItem,
  x as setExpireStorageItem,
  I as setStorageItem,
  p as transToOptions,
  l as uniqueArray
};
//# sourceMappingURL=kidd-utils.es.js.map
