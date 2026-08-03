"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  BdPaymentProvider: () => BdPaymentProvider,
  PAYMENT_BRANDS: () => PAYMENT_BRANDS,
  PAYMENT_METHOD_LABELS: () => PAYMENT_METHOD_LABELS,
  PaymentBrandMark: () => PaymentBrandMark,
  PaymentDialog: () => PaymentDialog,
  extractTrxId: () => extractTrxId,
  isValidTrxId: () => isValidTrxId,
  parseTrxIdConstraints: () => parseTrxIdConstraints,
  renderInstructions: () => renderInstructions,
  resolveBrands: () => resolveBrands,
  sanitiseTrxId: () => sanitiseTrxId,
  useBdPaymentConfig: () => useBdPaymentConfig,
  usePaymentDialog: () => usePaymentDialog
});
module.exports = __toCommonJS(index_exports);

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react2 = require("react");

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/Icon.js
var import_react = require("react");

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/Icon.js
var Icon = (0, import_react.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return (0, import_react.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react2.forwardRef)(
    ({ className, ...props }, ref) => (0, import_react2.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/arrow-left.js
var __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
var ArrowLeft = createLucideIcon("ArrowLeft", __iconNode);

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/check.js
var __iconNode2 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
var Check = createLucideIcon("Check", __iconNode2);

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/chevron-right.js
var __iconNode3 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
var ChevronRight = createLucideIcon("ChevronRight", __iconNode3);

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/circle-check.js
var __iconNode4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
var CircleCheck = createLucideIcon("CircleCheck", __iconNode4);

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/clipboard-paste.js
var __iconNode5 = [
  [
    "path",
    { d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z", key: "1pp7kr" }
  ],
  [
    "path",
    {
      d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",
      key: "2ik1ml"
    }
  ],
  ["path", { d: "m17 10 4 4-4 4", key: "vp2hj1" }]
];
var ClipboardPaste = createLucideIcon("ClipboardPaste", __iconNode5);

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/clock.js
var __iconNode6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
var Clock = createLucideIcon("Clock", __iconNode6);

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/copy.js
var __iconNode7 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
var Copy = createLucideIcon("Copy", __iconNode7);

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/credit-card.js
var __iconNode8 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
var CreditCard = createLucideIcon("CreditCard", __iconNode8);

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/loader-circle.js
var __iconNode9 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
var LoaderCircle = createLucideIcon("LoaderCircle", __iconNode9);

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/shield-check.js
var __iconNode10 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
var ShieldCheck = createLucideIcon("ShieldCheck", __iconNode10);

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/sparkles.js
var __iconNode11 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
var Sparkles = createLucideIcon("Sparkles", __iconNode11);

// ../../node_modules/.pnpm/lucide-react@0.475.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/x.js
var __iconNode12 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
var X = createLucideIcon("X", __iconNode12);

// src/components/PaymentDialog.tsx
var import_react5 = __toESM(require("react"));

// src/lib/labels.ts
var PAYMENT_METHOD_LABELS = {
  COD: "Cash on Delivery",
  BKASH: "bKash",
  NAGAD: "Nagad",
  ROCKET: "Rocket",
  UPAY: "Upay",
  CELLFIN: "CellFin",
  BANK_TRANSFER: "Bank Transfer",
  CARD: "Card"
};

// src/lib/payment-validation.ts
var FALLBACK = {
  allowed: /[A-Za-z0-9-]/,
  minLength: 1,
  maxLength: 40,
  uppercase: true,
  hint: null
};
function parseTrxIdConstraints(pattern) {
  if (!pattern) return FALLBACK;
  const match = /^\^\[([^\]]+)\]\{(\d+)(?:,(\d+))?\}\$$/.exec(pattern);
  const plusMatch = /^\^\[([^\]]+)\]\+\$$/.exec(pattern);
  const charClass = match?.[1] ?? plusMatch?.[1];
  if (!charClass) return FALLBACK;
  let allowed;
  try {
    allowed = new RegExp(`[${charClass}]`);
  } catch {
    return FALLBACK;
  }
  const uppercase = !charClass.includes("a-z");
  const min = match ? Number(match[2]) : 1;
  const max = match ? Number(match[3] ?? match[2]) : FALLBACK.maxLength;
  const hint = match && min === max ? `${min} characters` : match ? `${min}\u2013${max} characters` : null;
  return { allowed, minLength: min, maxLength: max, uppercase, hint };
}
function sanitiseTrxId(raw, constraints) {
  const cased = constraints.uppercase ? raw.toUpperCase() : raw;
  const filtered = Array.from(cased).filter((ch) => constraints.allowed.test(ch)).join("");
  return filtered.slice(0, constraints.maxLength);
}
function extractTrxId(raw, pattern, constraints) {
  const text = raw.trim();
  const labelled = /(?:trx|txn|transaction)\s*id\s*[:\-]?\s*([A-Za-z0-9-]+)/i.exec(text)?.[1];
  if (labelled) {
    const cleaned = sanitiseTrxId(labelled, constraints);
    if (isValidTrxId(cleaned, pattern, constraints)) return cleaned;
  }
  const whole = sanitiseTrxId(text, constraints);
  if (!/\s/.test(text) && isValidTrxId(whole, pattern, constraints)) {
    return whole;
  }
  const candidates = text.split(/\s+/).map((token) => sanitiseTrxId(token, constraints)).filter((token) => isValidTrxId(token, pattern, constraints));
  if (candidates.length) {
    return candidates.sort((a, b) => b.length - a.length)[0];
  }
  return whole;
}
function isValidTrxId(value, pattern, constraints) {
  if (value.length < constraints.minLength) return false;
  if (value.length > constraints.maxLength) return false;
  if (!pattern) return value.length > 0;
  try {
    return new RegExp(pattern).test(value);
  } catch {
    return true;
  }
}

// ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// ../../node_modules/.pnpm/tailwind-merge@3.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var concatArrays = (array1, array2) => {
  const combinedArray = new Array(array1.length + array2.length);
  for (let i = 0; i < array1.length; i++) {
    combinedArray[i] = array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    combinedArray[array1.length + i] = array2[i];
  }
  return combinedArray;
};
var createClassValidatorObject = (classGroupId, validator) => ({
  classGroupId,
  validator
});
var createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId) => ({
  nextPart,
  validators,
  classGroupId
});
var CLASS_PART_SEPARATOR = "-";
var EMPTY_CONFLICTS = [];
var ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
var createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    if (className.startsWith("[") && className.endsWith("]")) {
      return getGroupIdForArbitraryProperty(className);
    }
    const classParts = className.split(CLASS_PART_SEPARATOR);
    const startIndex = classParts[0] === "" && classParts.length > 1 ? 1 : 0;
    return getGroupRecursive(classParts, startIndex, classMap);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    if (hasPostfixModifier) {
      const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
      const baseConflicts = conflictingClassGroups[classGroupId];
      if (modifierConflicts) {
        if (baseConflicts) {
          return concatArrays(baseConflicts, modifierConflicts);
        }
        return modifierConflicts;
      }
      return baseConflicts || EMPTY_CONFLICTS;
    }
    return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
var getGroupRecursive = (classParts, startIndex, classPartObject) => {
  const classPathsLength = classParts.length - startIndex;
  if (classPathsLength === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[startIndex];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  if (nextClassPartObject) {
    const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
    if (result) return result;
  }
  const validators = classPartObject.validators;
  if (validators === null) {
    return void 0;
  }
  const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
  const validatorsLength = validators.length;
  for (let i = 0; i < validatorsLength; i++) {
    const validatorObj = validators[i];
    if (validatorObj.validator(classRest)) {
      return validatorObj.classGroupId;
    }
  }
  return void 0;
};
var getGroupIdForArbitraryProperty = (className) => className.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const content = className.slice(1, -1);
  const colonIndex = content.indexOf(":");
  const property = content.slice(0, colonIndex);
  return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
})();
var createClassMap = (config) => {
  const {
    theme,
    classGroups
  } = config;
  return processClassGroups(classGroups, theme);
};
var processClassGroups = (classGroups, theme) => {
  const classMap = createClassPartObject();
  for (const classGroupId in classGroups) {
    const group = classGroups[classGroupId];
    processClassesRecursively(group, classMap, classGroupId, theme);
  }
  return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  const len = classGroup.length;
  for (let i = 0; i < len; i++) {
    const classDefinition = classGroup[i];
    processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
  }
};
var processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  if (typeof classDefinition === "string") {
    processStringDefinition(classDefinition, classPartObject, classGroupId);
    return;
  }
  if (typeof classDefinition === "function") {
    processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
    return;
  }
  processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
var processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
  const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
  classPartObjectToEdit.classGroupId = classGroupId;
};
var processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  if (isThemeGetter(classDefinition)) {
    processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
    return;
  }
  if (classPartObject.validators === null) {
    classPartObject.validators = [];
  }
  classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
var processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  const entries = Object.entries(classDefinition);
  const len = entries.length;
  for (let i = 0; i < len; i++) {
    const [key, value] = entries[i];
    processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
  }
};
var getPart = (classPartObject, path) => {
  let current = classPartObject;
  const parts = path.split(CLASS_PART_SEPARATOR);
  const len = parts.length;
  for (let i = 0; i < len; i++) {
    const part = parts[i];
    let next = current.nextPart.get(part);
    if (!next) {
      next = createClassPartObject();
      current.nextPart.set(part, next);
    }
    current = next;
  }
  return current;
};
var isThemeGetter = (func) => "isThemeGetter" in func && func.isThemeGetter === true;
var createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ Object.create(null);
  let previousCache = /* @__PURE__ */ Object.create(null);
  const update = (key, value) => {
    cache[key] = value;
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ Object.create(null);
    }
  };
  return {
    get(key) {
      let value = cache[key];
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache[key]) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (key in cache) {
        cache[key] = value;
      } else {
        update(key, value);
      }
    }
  };
};
var IMPORTANT_MODIFIER = "!";
var MODIFIER_SEPARATOR = ":";
var EMPTY_MODIFIERS = [];
var createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) => ({
  modifiers,
  hasImportantModifier,
  baseClassName,
  maybePostfixModifierPosition,
  isExternal
});
var createParseClassName = (config) => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let parenDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    const len = className.length;
    for (let index = 0; index < len; index++) {
      const currentCharacter = className[index];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + 1;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") bracketDepth++;
      else if (currentCharacter === "]") bracketDepth--;
      else if (currentCharacter === "(") parenDepth++;
      else if (currentCharacter === ")") parenDepth--;
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
    let baseClassName = baseClassNameWithImportantModifier;
    let hasImportantModifier = false;
    if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
      baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
      hasImportantModifier = true;
    } else if (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)
    ) {
      baseClassName = baseClassNameWithImportantModifier.slice(1);
      hasImportantModifier = true;
    }
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR;
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, void 0, true);
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
};
var createSortModifiers = (config) => {
  const modifierWeights = /* @__PURE__ */ new Map();
  config.orderSensitiveModifiers.forEach((mod, index) => {
    modifierWeights.set(mod, 1e6 + index);
  });
  return (modifiers) => {
    const result = [];
    let currentSegment = [];
    for (let i = 0; i < modifiers.length; i++) {
      const modifier = modifiers[i];
      const isArbitrary = modifier[0] === "[";
      const isOrderSensitive = modifierWeights.has(modifier);
      if (isArbitrary || isOrderSensitive) {
        if (currentSegment.length > 0) {
          currentSegment.sort();
          result.push(...currentSegment);
          currentSegment = [];
        }
        result.push(modifier);
      } else {
        currentSegment.push(modifier);
      }
    }
    if (currentSegment.length > 0) {
      currentSegment.sort();
      result.push(...currentSegment);
    }
    return result;
  };
};
var createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  sortModifiers: createSortModifiers(config),
  postfixLookupClassGroupIds: createPostfixLookupClassGroupIds(config),
  ...createClassGroupUtils(config)
});
var createPostfixLookupClassGroupIds = (config) => {
  const lookup = /* @__PURE__ */ Object.create(null);
  const classGroupIds = config.postfixLookupClassGroups;
  if (classGroupIds) {
    for (let i = 0; i < classGroupIds.length; i++) {
      lookup[classGroupIds[i]] = true;
    }
  }
  return lookup;
};
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers,
    postfixLookupClassGroupIds
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition;
    let classGroupId;
    if (hasPostfixModifier) {
      const baseClassNameWithoutPostfix = baseClassName.substring(0, maybePostfixModifierPosition);
      classGroupId = getClassGroupId(baseClassNameWithoutPostfix);
      const classGroupIdWithPostfix = classGroupId && postfixLookupClassGroupIds[classGroupId] ? getClassGroupId(baseClassName) : void 0;
      if (classGroupIdWithPostfix && classGroupIdWithPostfix !== classGroupId) {
        classGroupId = classGroupIdWithPostfix;
        hasPostfixModifier = false;
      }
    } else {
      classGroupId = getClassGroupId(baseClassName);
    }
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.indexOf(classId) > -1) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
var twJoin = (...classLists) => {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < classLists.length) {
    if (argument = classLists[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
var toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
var createTailwindMerge = (createConfigFirst, ...createConfigRest) => {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall;
  const initTailwindMerge = (classList) => {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  };
  const tailwindMerge = (classList) => {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  };
  functionToCall = initTailwindMerge;
  return (...args) => functionToCall(twJoin(...args));
};
var fallbackThemeArr = [];
var fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || fallbackThemeArr;
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isFraction = (value) => fractionRegex.test(value);
var isNumber = (value) => !!value && !Number.isNaN(Number(value));
var isInteger = (value) => !!value && Number.isInteger(Number(value));
var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var isAny = () => true;
var isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
var isNamedContainerQuery = (value) => value.startsWith("@container") && (value[10] === "/" && value[11] !== void 0 || value[11] === "s" && value[16] !== void 0 && value.startsWith("-size/", 10) || value[11] === "n" && value[18] !== void 0 && value.startsWith("-normal/", 10));
var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
var isArbitraryWeight = (value) => getIsArbitraryValue(value, isLabelWeight, isAny);
var isArbitraryFamilyName = (value) => getIsArbitraryValue(value, isLabelFamilyName, isNever);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
var isArbitraryVariableWeight = (value) => getIsArbitraryVariable(value, isLabelWeight, true);
var getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
  const result = arbitraryVariableRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return shouldMatchNoLabel;
  }
  return false;
};
var isLabelPosition = (label) => label === "position" || label === "percentage";
var isLabelImage = (label) => label === "image" || label === "url";
var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
var isLabelLength = (label) => label === "length";
var isLabelNumber = (label) => label === "number";
var isLabelFamilyName = (label) => label === "family-name";
var isLabelWeight = (label) => label === "number" || label === "weight";
var isLabelShadow = (label) => label === "shadow";
var getDefaultConfig = () => {
  const themeColor = fromTheme("color");
  const themeFont = fromTheme("font");
  const themeText = fromTheme("text");
  const themeFontWeight = fromTheme("font-weight");
  const themeTracking = fromTheme("tracking");
  const themeLeading = fromTheme("leading");
  const themeBreakpoint = fromTheme("breakpoint");
  const themeContainer = fromTheme("container");
  const themeSpacing = fromTheme("spacing");
  const themeRadius = fromTheme("radius");
  const themeShadow = fromTheme("shadow");
  const themeInsetShadow = fromTheme("inset-shadow");
  const themeTextShadow = fromTheme("text-shadow");
  const themeDropShadow = fromTheme("drop-shadow");
  const themeBlur = fromTheme("blur");
  const themePerspective = fromTheme("perspective");
  const themeAspect = fromTheme("aspect");
  const themeEase = fromTheme("ease");
  const themeAnimate = fromTheme("animate");
  const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const scalePosition = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ];
  const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
  const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const scaleOverscroll = () => ["auto", "contain", "none"];
  const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
  const scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()];
  const scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartAndEnd = () => ["auto", {
    span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
  }, isInteger, isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue];
  const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue];
  const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
  const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
  const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
  const scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleSizingInline = () => [isFraction, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleSizingBlock = () => [isFraction, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
  const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
    position: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleBgRepeat = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }];
  const scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
    size: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
  const scaleRadius = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength];
  const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
  const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
  const scaleBlur = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    themeBlur,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      "drop-shadow": [isTshirtSize],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [isTshirtSize],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ["px", isNumber],
      text: [isTshirtSize],
      "text-shadow": [isTshirtSize],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [isNamedContainerQuery],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": scaleBreak()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": scaleBreak()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: scalePositionWithArbitrary()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: scaleOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": scaleOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": scaleOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": scaleOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": scaleOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: scaleInset()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": scaleInset()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": scaleInset()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": scaleInset(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: scaleInset()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": scaleInset(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: scaleInset()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": scaleInset()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": scaleInset()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: scaleInset()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: scaleInset()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: scaleInset()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: scaleInset()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": scaleGridAutoColsRows()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": scaleGridAutoColsRows()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": scaleUnambiguousSpacing()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": scaleUnambiguousSpacing()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...scaleAlignPrimaryAxis(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...scaleAlignPrimaryAxis()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": scaleAlignPrimaryAxis()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: scaleMargin()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: scaleMargin()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: scaleMargin()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: scaleMargin()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: scaleMargin()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: scaleMargin()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: scaleMargin()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: scaleMargin()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: scaleMargin()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: scaleMargin()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: scaleMargin()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: scaleSizing()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...scaleSizingInline()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...scaleSizingInline()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...scaleSizingInline()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...scaleSizingBlock()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...scaleSizingBlock()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...scaleSizingBlock()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [themeContainer, "screen", ...scaleSizing()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          themeContainer,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...scaleSizing()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          themeContainer,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [themeBreakpoint]
          },
          ...scaleSizing()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...scaleSizing()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...scaleSizing()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...scaleSizing()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [themeFontWeight, isArbitraryVariableWeight, isArbitraryWeight]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isArbitraryVariableFamilyName, isArbitraryFamilyName, themeFont]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [isArbitraryValue]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          themeLeading,
          ...scaleUnambiguousSpacing()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: scaleColor()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: scaleColor()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...scaleLineStyle(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: scaleColor()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [isInteger, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: scaleBgPosition()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: scaleBgRepeat()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: scaleBgSize()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isInteger, isArbitraryVariable, isArbitraryValue],
          radial: ["", isArbitraryVariable, isArbitraryValue],
          conic: [isInteger, isArbitraryVariable, isArbitraryValue]
        }, isArbitraryVariableImage, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: scaleColor()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: scaleColor()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: scaleColor()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: scaleColor()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: scaleRadius()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": scaleRadius()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": scaleRadius()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": scaleRadius()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": scaleRadius()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": scaleRadius()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": scaleRadius()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": scaleRadius()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": scaleRadius()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": scaleRadius()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": scaleRadius()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": scaleRadius()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": scaleRadius()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": scaleRadius()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": scaleRadius()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: scaleBorderWidth()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": scaleBorderWidth()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": scaleBorderWidth()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": scaleBorderWidth()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": scaleBorderWidth()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": scaleBorderWidth()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": scaleBorderWidth()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": scaleBorderWidth()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": scaleBorderWidth()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": scaleBorderWidth()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": scaleBorderWidth()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": scaleBorderWidth()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": scaleBorderWidth()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: scaleColor()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": scaleColor()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": scaleColor()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": scaleColor()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": scaleColor()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": scaleColor()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": scaleColor()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": scaleColor()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": scaleColor()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": scaleColor()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": scaleColor()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: scaleColor()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...scaleLineStyle(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: scaleColor()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: scaleColor()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": scaleColor()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: scaleBorderWidth()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: scaleColor()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [isNumber, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": scaleColor()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": scaleBorderWidth()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": scaleColor()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": scaleColor()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": scaleBlendMode()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [isNumber]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": scaleMaskImagePosition()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": scaleMaskImagePosition()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": scaleColor()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": scaleColor()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": scaleMaskImagePosition()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": scaleMaskImagePosition()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": scaleColor()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": scaleColor()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": scaleMaskImagePosition()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": scaleMaskImagePosition()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": scaleColor()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": scaleColor()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": scaleMaskImagePosition()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": scaleMaskImagePosition()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": scaleColor()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": scaleColor()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": scaleMaskImagePosition()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": scaleMaskImagePosition()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": scaleColor()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": scaleColor()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": scaleMaskImagePosition()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": scaleMaskImagePosition()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": scaleColor()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": scaleColor()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": scaleMaskImagePosition()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": scaleMaskImagePosition()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": scaleColor()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": scaleColor()
      }],
      "mask-image-radial": [{
        "mask-radial": [isArbitraryVariable, isArbitraryValue]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": scaleMaskImagePosition()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": scaleMaskImagePosition()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": scaleColor()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": scaleColor()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": scalePosition()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [isNumber]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": scaleMaskImagePosition()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": scaleMaskImagePosition()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": scaleColor()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": scaleColor()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: scaleBgPosition()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: scaleBgRepeat()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: scaleBgSize()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: scaleBlur()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeDropShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": scaleColor()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": scaleBlur()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": scaleUnambiguousSpacing()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": scalePositionWithArbitrary()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: scaleRotate()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": scaleRotate()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": scaleRotate()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": scaleRotate()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: scaleScale()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": scaleScale()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": scaleScale()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": scaleScale()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: scaleSkew()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": scaleSkew()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": scaleSkew()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: scalePositionWithArbitrary()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: scaleTranslate()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": scaleTranslate()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": scaleTranslate()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": scaleTranslate()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [isInteger, isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: scaleColor()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: scaleColor()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": scaleColor()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": scaleColor()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...scaleColor()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...scaleColor()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
};
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);

// src/lib/cn.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Button.tsx
var React = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var Button = React.forwardRef(
  ({ className, type = "button", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        ref,
        type,
        className: cn(
          "inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border-0 bg-(--bdp-primary) px-4 py-3 text-[14px] font-semibold text-(--bdp-primary-fg) shadow-sm outline-none transition-all hover:opacity-90 focus-visible:ring-2 focus-visible:ring-(--bdp-primary)/50 disabled:pointer-events-none disabled:opacity-50",
          className
        ),
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// ../../node_modules/.pnpm/@radix-ui+react-primitive@2_89d529a1bae70a6b01b956c8b2bdbce1/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React4 = __toESM(require("react"), 1);
var ReactDOM = __toESM(require("react-dom"), 1);

// ../../node_modules/.pnpm/@radix-ui+react-slot@1.3.3_@types+react@19.2.18_react@19.2.8/node_modules/@radix-ui/react-slot/dist/index.mjs
var React3 = __toESM(require("react"), 1);

// ../../node_modules/.pnpm/@radix-ui+react-compose-ref_60a8f511f5a953d1cc58e5040847ca1c/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React2 = __toESM(require("react"), 1);
var __defProp2 = Object.defineProperty;
var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
__name(setRef, "setRef");
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
__name(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
  return React2.useCallback(composeRefs(...refs), refs);
}
__name(useComposedRefs, "useComposedRefs");

// ../../node_modules/.pnpm/@radix-ui+react-slot@1.3.3_@types+react@19.2.18_react@19.2.8/node_modules/@radix-ui/react-slot/dist/index.mjs
var __defProp3 = Object.defineProperty;
var __name2 = (target, value) => __defProp3(target, "name", { value, configurable: true });
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const Slot2 = React3.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    let slottableElement = null;
    let hasSlottable = false;
    const newChildren = [];
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    React3.Children.forEach(children, (maybeSlottable) => {
      if (isSlottable(maybeSlottable)) {
        hasSlottable = true;
        const slottable = maybeSlottable;
        let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
        if (isLazyComponent(child) && typeof use === "function") {
          child = use(child._payload);
        }
        slottableElement = getSlottableElementFromSlottable(slottable, child);
        newChildren.push(slottableElement?.props?.children);
      } else {
        newChildren.push(maybeSlottable);
      }
    });
    if (slottableElement) {
      slottableElement = React3.cloneElement(slottableElement, void 0, newChildren);
    } else if (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !hasSlottable && React3.Children.count(children) === 1 && React3.isValidElement(children)
    ) {
      slottableElement = children;
    }
    const slottableElementRef = slottableElement ? getElementRef(slottableElement) : void 0;
    const composedRef = useComposedRefs(forwardedRef, slottableElementRef);
    if (!slottableElement) {
      if (children || children === 0) {
        throw new Error(
          hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName)
        );
      }
      return children;
    }
    const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
    if (slottableElement.type !== React3.Fragment) {
      mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
    }
    return React3.cloneElement(slottableElement, mergedProps);
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
__name2(createSlot, "createSlot");
var SLOTTABLE_IDENTIFIER = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
  const Slottable2 = /* @__PURE__ */ __name2((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
__name2(createSlottable, "createSlottable");
var getSlottableElementFromSlottable = /* @__PURE__ */ __name2((slottable, child) => {
  if ("child" in slottable.props) {
    const child2 = slottable.props.child;
    if (!React3.isValidElement(child2)) return null;
    return React3.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
  }
  return React3.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
__name2(mergeProps, "mergeProps");
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
__name2(getElementRef, "getElementRef");
function isSlottable(child) {
  return React3.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
__name2(isSlottable, "isSlottable");
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
function isLazyComponent(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
__name2(isLazyComponent, "isLazyComponent");
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
__name2(isPromiseLike, "isPromiseLike");
var createSlotError = /* @__PURE__ */ __name2((ownerName) => {
  return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError = /* @__PURE__ */ __name2((ownerName) => {
  return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use = React3[" use ".trim().toString()];

// ../../node_modules/.pnpm/@radix-ui+react-primitive@2_89d529a1bae70a6b01b956c8b2bdbce1/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime2 = require("react/jsx-runtime");
var __defProp4 = Object.defineProperty;
var __name3 = (target, value) => __defProp4(target, "name", { value, configurable: true });
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot2 = createSlot(`Primitive.${node}`);
  const Node2 = React4.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}
__name3(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");

// ../../node_modules/.pnpm/@radix-ui+react-context@1.2_dc174a77f999d3bc0470f0b9c664f7ff/node_modules/@radix-ui/react-context/dist/index.mjs
var React5 = __toESM(require("react"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
var __defProp5 = Object.defineProperty;
var __name4 = (target, value) => __defProp5(target, "name", { value, configurable: true });
// @__NO_SIDE_EFFECTS__
function createContext2(rootComponentName, defaultContext) {
  const Context = React5.createContext(defaultContext);
  Context.displayName = rootComponentName + "Context";
  const Provider = /* @__PURE__ */ __name4((props) => {
    const { children, ...context } = props;
    const value = React5.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Context.Provider, { value, children });
  }, "Provider");
  Provider.displayName = rootComponentName + "Provider";
  function useContext22(consumerName, options = {}) {
    const { optional = false } = options;
    const context = React5.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    if (optional) return void 0;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  __name4(useContext22, "useContext");
  return [Provider, useContext22];
}
__name4(createContext2, "createContext");
// @__NO_SIDE_EFFECTS__
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React5.createContext(defaultContext);
    BaseContext.displayName = rootComponentName + "Context";
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = /* @__PURE__ */ __name4((props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React5.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Context.Provider, { value, children });
    }, "Provider");
    Provider.displayName = rootComponentName + "Provider";
    function useContext22(consumerName, scope, options = {}) {
      const { optional = false } = options;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React5.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      if (optional) return void 0;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    __name4(useContext22, "useContext");
    return [Provider, useContext22];
  }
  __name4(createContext32, "createContext");
  const createScope = /* @__PURE__ */ __name4(() => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React5.createContext(defaultContext);
    });
    return /* @__PURE__ */ __name4(function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React5.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    }, "useScope");
  }, "createScope");
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
__name4(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = /* @__PURE__ */ __name4(() => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return /* @__PURE__ */ __name4(function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React5.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    }, "useComposedScopes");
  }, "createScope");
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
__name4(composeContextScopes, "composeContextScopes");

// ../../node_modules/.pnpm/@radix-ui+primitive@1.1.7/node_modules/@radix-ui/primitive/dist/index.mjs
var __defProp6 = Object.defineProperty;
var __name5 = (target, value) => __defProp6(target, "name", { value, configurable: true });
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return /* @__PURE__ */ __name5(function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  }, "handleEvent");
}
__name5(composeEventHandlers, "composeEventHandlers");
function getOwnerWindow(element) {
  if (!canUseDOM) {
    throw new Error("Cannot access window outside of the DOM");
  }
  return element?.ownerDocument?.defaultView ?? window;
}
__name5(getOwnerWindow, "getOwnerWindow");
function getOwnerDocument(element) {
  if (!canUseDOM) {
    throw new Error("Cannot access document outside of the DOM");
  }
  return element?.ownerDocument ?? document;
}
__name5(getOwnerDocument, "getOwnerDocument");
function getActiveElement(node, activeDescendant = false) {
  const { activeElement } = getOwnerDocument(node);
  if (!activeElement?.nodeName) {
    return null;
  }
  if (isFrame(activeElement) && activeElement.contentDocument) {
    return getActiveElement(activeElement.contentDocument.body, activeDescendant);
  }
  if (activeDescendant) {
    const id = activeElement.getAttribute("aria-activedescendant");
    if (id) {
      const element = getOwnerDocument(activeElement).getElementById(id);
      if (element) {
        return element;
      }
    }
  }
  return activeElement;
}
__name5(getActiveElement, "getActiveElement");
function isFrame(element) {
  return element.tagName === "IFRAME";
}
__name5(isFrame, "isFrame");

// ../../node_modules/.pnpm/@radix-ui+react-use-control_22187853d61b94632003c277d0370b10/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React8 = __toESM(require("react"), 1);

// ../../node_modules/.pnpm/@radix-ui+primitive@1.1.7/node_modules/@radix-ui/primitive/dist/internal/is-development.false.mjs
var IS_DEVELOPMENT = false;

// ../../node_modules/.pnpm/@radix-ui+react-use-layout-_c99e7a4bfc0168fd072fc8506ded8cde/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React6 = __toESM(require("react"), 1);
var useLayoutEffect2 = globalThis?.document ? React6.useLayoutEffect : () => {
};

// ../../node_modules/.pnpm/@radix-ui+react-use-control_22187853d61b94632003c277d0370b10/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React22 = __toESM(require("react"), 1);

// ../../node_modules/.pnpm/@radix-ui+react-use-effect-_e8d5e8242c04825bf34212c7f6280f14/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
var React7 = __toESM(require("react"), 1);
var __defProp7 = Object.defineProperty;
var __name6 = (target, value) => __defProp7(target, "name", { value, configurable: true });
var useReactEffectEvent = React7[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = React7[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
  if (typeof useReactEffectEvent === "function") {
    return useReactEffectEvent(callback);
  }
  const ref = React7.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  if (typeof useReactInsertionEffect === "function") {
    useReactInsertionEffect(() => {
      ref.current = callback;
    });
  } else {
    useLayoutEffect2(() => {
      ref.current = callback;
    });
  }
  return React7.useMemo(() => ((...args) => ref.current?.(...args)), []);
}
__name6(useEffectEvent, "useEffectEvent");

// ../../node_modules/.pnpm/@radix-ui+react-use-control_22187853d61b94632003c277d0370b10/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var __defProp8 = Object.defineProperty;
var __name7 = (target, value) => __defProp8(target, "name", { value, configurable: true });
var useInsertionEffect = React8[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = /* @__PURE__ */ __name7(() => {
  }, "onChange"),
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  if (IS_DEVELOPMENT) {
    const isControlledRef = React8.useRef(prop !== void 0);
    React8.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React8.useCallback(
    (nextValue) => {
      if (isControlled) {
        const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          onChangeRef.current?.(value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
__name7(useControllableState, "useControllableState");
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = React8.useState(defaultProp);
  const prevValueRef = React8.useRef(value);
  const onChangeRef = React8.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React8.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
__name7(useUncontrolledState, "useUncontrolledState");
function isFunction(value) {
  return typeof value === "function";
}
__name7(isFunction, "isFunction");
var SYNC_STATE = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
  const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
  const isControlled = controlledState !== void 0;
  const onChange = useEffectEvent(onChangeProp);
  if (IS_DEVELOPMENT) {
    const isControlledRef = React22.useRef(controlledState !== void 0);
    React22.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const args = [{ ...initialArg, state: defaultProp }];
  if (init) {
    args.push(init);
  }
  const [internalState, dispatch] = React22.useReducer(
    (state2, action) => {
      if (action.type === SYNC_STATE) {
        return { ...state2, state: action.state };
      }
      const next = reducer(state2, action);
      if (isControlled && !Object.is(next.state, state2.state)) {
        onChange(next.state);
      }
      return next;
    },
    ...args
  );
  const uncontrolledState = internalState.state;
  const prevValueRef = React22.useRef(uncontrolledState);
  React22.useEffect(() => {
    if (prevValueRef.current !== uncontrolledState) {
      prevValueRef.current = uncontrolledState;
      if (!isControlled) {
        onChange(uncontrolledState);
      }
    }
  }, [uncontrolledState, prevValueRef, isControlled]);
  const state = React22.useMemo(() => {
    const isControlled2 = controlledState !== void 0;
    if (isControlled2) {
      return { ...internalState, state: controlledState };
    }
    return internalState;
  }, [internalState, controlledState]);
  React22.useEffect(() => {
    if (isControlled && !Object.is(controlledState, internalState.state)) {
      dispatch({ type: SYNC_STATE, state: controlledState });
    }
  }, [controlledState, internalState.state, isControlled]);
  return [state, dispatch];
}
__name7(useControllableStateReducer, "useControllableStateReducer");

// ../../node_modules/.pnpm/@radix-ui+react-presence@1._c16522d094fa2977c5a9a5cd628ab890/node_modules/@radix-ui/react-presence/dist/index.mjs
var React23 = __toESM(require("react"), 1);
var React9 = __toESM(require("react"), 1);
var __defProp9 = Object.defineProperty;
var __name8 = (target, value) => __defProp9(target, "name", { value, configurable: true });
function useStateMachine(initialState, machine) {
  return React9.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
__name8(useStateMachine, "useStateMachine");
var Presence = /* @__PURE__ */ __name8((props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React23.Children.only(children);
  const ref = useStableComposedRefs(presence.ref, getElementRef2(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React23.cloneElement(child, { ref }) : null;
}, "Presence");
function usePresence(present) {
  const [node, setNode] = React23.useState();
  const stylesRef = React23.useRef(null);
  const prevPresentRef = React23.useRef(present);
  const prevAnimationNameRef = React23.useRef("none");
  const mountAnimationNameRef = React23.useRef(void 0);
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React23.useEffect(() => {
    if (state === "mounted") {
      prevAnimationNameRef.current = mountAnimationNameRef.current ?? getAnimationName(stylesRef.current);
      mountAnimationNameRef.current = void 0;
    } else {
      prevAnimationNameRef.current = "none";
    }
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        mountAnimationNameRef.current = currentAnimationName;
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = /* @__PURE__ */ __name8((event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      }, "handleAnimationEnd");
      const handleAnimationStart = /* @__PURE__ */ __name8((event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      }, "handleAnimationStart");
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React23.useCallback((node2) => {
      if (node2) {
        const styles = getComputedStyle(node2);
        stylesRef.current = styles;
        mountAnimationNameRef.current = getAnimationName(styles);
      } else {
        stylesRef.current = null;
      }
      setNode(node2);
    }, [])
  };
}
__name8(usePresence, "usePresence");
function setRef2(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
__name8(setRef2, "setRef");
function useStableComposedRefs(...refs) {
  const refsRef = React23.useRef(refs);
  refsRef.current = refs;
  return React23.useCallback((node) => {
    const currentRefs = refsRef.current;
    let hasCleanup = false;
    const cleanups = currentRefs.map((ref) => {
      const cleanup = setRef2(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef2(currentRefs[i], null);
          }
        }
      };
    }
  }, []);
}
__name8(useStableComposedRefs, "useStableComposedRefs");
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
__name8(getAnimationName, "getAnimationName");
function getElementRef2(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
__name8(getElementRef2, "getElementRef");

// ../../node_modules/.pnpm/@radix-ui+react-id@1.1.4_@types+react@19.2.18_react@19.2.8/node_modules/@radix-ui/react-id/dist/index.mjs
var React10 = __toESM(require("react"), 1);
var __defProp10 = Object.defineProperty;
var __name9 = (target, value) => __defProp10(target, "name", { value, configurable: true });
var useReactId = React10[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React10.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}
__name9(useId, "useId");

// ../../node_modules/.pnpm/@radix-ui+react-dialog@1.1._f43cda4f5f60c6fd8f384ced683c6d90/node_modules/@radix-ui/react-dialog/dist/index.mjs
var dist_exports = {};
__export(dist_exports, {
  Close: () => DialogClose,
  Content: () => DialogContent,
  Description: () => DialogDescription,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  Overlay: () => DialogOverlay,
  Portal: () => DialogPortal,
  Root: () => Dialog,
  Title: () => DialogTitle,
  Trigger: () => DialogTrigger,
  WarningProvider: () => WarningProvider,
  createDialogScope: () => createDialogScope
});
var React25 = __toESM(require("react"), 1);

// ../../node_modules/.pnpm/@radix-ui+react-dismissable_40e495cae3a960f65f80435c18b02650/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var React12 = __toESM(require("react"), 1);

// ../../node_modules/.pnpm/@radix-ui+react-use-callbac_b03f33a0fc5867b4ab17368fb2aecc43/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var React11 = __toESM(require("react"), 1);
var __defProp11 = Object.defineProperty;
var __name10 = (target, value) => __defProp11(target, "name", { value, configurable: true });
function useCallbackRef(callback) {
  const callbackRef = React11.useRef(callback);
  React11.useEffect(() => {
    callbackRef.current = callback;
  });
  return React11.useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}
__name10(useCallbackRef, "useCallbackRef");

// ../../node_modules/.pnpm/@radix-ui+react-dismissable_40e495cae3a960f65f80435c18b02650/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_jsx_runtime4 = require("react/jsx-runtime");
var __defProp12 = Object.defineProperty;
var __name11 = (target, value) => __defProp12(target, "name", { value, configurable: true });
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React12.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
});
var DismissableLayer = /* @__PURE__ */ React12.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name11(function DismissableLayer2(props, forwardedRef) {
    const {
      disableOutsidePointerEvents = false,
      deferPointerDownOutside = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = React12.useContext(DismissableLayerContext);
    const [node, setNode] = React12.useState(null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = React12.useState({});
    const composedRefs = useComposedRefs(forwardedRef, setNode);
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
      ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = highestLayerWithOutsidePointerEventsDisabled ? layers.indexOf(highestLayerWithOutsidePointerEventsDisabled) : -1;
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const isDeferredPointerDownOutsideRef = React12.useRef(false);
    const pointerDownOutside = usePointerDownOutside(
      (event) => {
        onPointerDownOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
      },
      {
        ownerDocument,
        deferPointerDownOutside,
        isDeferredPointerDownOutsideRef,
        dismissableSurfaces: context.dismissableSurfaces,
        shouldHandlePointerDownOutside: React12.useCallback(
          (target) => {
            if (!(target instanceof Node)) {
              return false;
            }
            const isPointerDownOnBranch = [...context.branches].some(
              (branch) => branch.contains(target)
            );
            return isPointerEventsEnabled && !isPointerDownOnBranch;
          },
          [context.branches, isPointerEventsEnabled]
        )
      }
    );
    const focusOutside = useFocusOutside((event) => {
      if (deferPointerDownOutside && isDeferredPointerDownOutsideRef.current) {
        return;
      }
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const isHighestLayer = node ? index === layers.length - 1 : false;
    const handleKeyDown = useCallbackRef((event) => {
      if (event.key !== "Escape") {
        return;
      }
      onEscapeKeyDown?.(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    });
    React12.useEffect(() => {
      if (!isHighestLayer) {
        return;
      }
      ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
      return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
    }, [ownerDocument, isHighestLayer, handleKeyDown]);
    React12.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents) {
          context.layersWithOutsidePointerEventsDisabled.delete(node);
          if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
            ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
          }
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    React12.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    React12.useEffect(() => {
      const handleUpdate = /* @__PURE__ */ __name11(() => force({}), "handleUpdate");
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function useDismissableLayerSurface() {
  const context = React12.useContext(DismissableLayerContext);
  const [node, setNode] = React12.useState(null);
  React12.useEffect(() => {
    if (!node) {
      return;
    }
    context.dismissableSurfaces.add(node);
    return () => {
      context.dismissableSurfaces.delete(node);
    };
  }, [node, context.dismissableSurfaces]);
  return setNode;
}
__name11(useDismissableLayerSurface, "useDismissableLayerSurface");
var IS_TRUE = /* @__PURE__ */ __name11(() => true, "IS_TRUE");
function usePointerDownOutside(onPointerDownOutside, args) {
  const {
    ownerDocument = globalThis?.document,
    deferPointerDownOutside = false,
    isDeferredPointerDownOutsideRef,
    dismissableSurfaces,
    shouldHandlePointerDownOutside = IS_TRUE
  } = args;
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React12.useRef(false);
  const isPointerDownOutsideRef = React12.useRef(false);
  const interceptedOutsideInteractionEventsRef = React12.useRef(/* @__PURE__ */ new Map());
  const handleClickRef = React12.useRef(() => {
  });
  React12.useEffect(() => {
    function resetOutsideInteraction() {
      isPointerDownOutsideRef.current = false;
      isDeferredPointerDownOutsideRef.current = false;
      interceptedOutsideInteractionEventsRef.current.clear();
    }
    __name11(resetOutsideInteraction, "resetOutsideInteraction");
    function isOutsideInteractionIntercepted() {
      return Array.from(interceptedOutsideInteractionEventsRef.current.values()).some(Boolean);
    }
    __name11(isOutsideInteractionIntercepted, "isOutsideInteractionIntercepted");
    function handleInteractionCapture(event) {
      if (!isPointerDownOutsideRef.current) {
        return;
      }
      const target = event.target;
      const isDismissableSurface = target instanceof Node && [...dismissableSurfaces].some((surface) => surface.contains(target));
      if (!isDismissableSurface) {
        interceptedOutsideInteractionEventsRef.current.set(event.type, true);
      }
      if (event.type === "click") {
        window.setTimeout(() => {
          if (isPointerDownOutsideRef.current) {
            handleClickRef.current();
          }
        }, 0);
      }
    }
    __name11(handleInteractionCapture, "handleInteractionCapture");
    function handleInteractionBubble(event) {
      if (isPointerDownOutsideRef.current) {
        interceptedOutsideInteractionEventsRef.current.set(event.type, false);
      }
    }
    __name11(handleInteractionBubble, "handleInteractionBubble");
    const handlePointerDown = /* @__PURE__ */ __name11((event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          const wasOutsideInteractionIntercepted = isOutsideInteractionIntercepted();
          resetOutsideInteraction();
          if (!wasOutsideInteractionIntercepted) {
            handleAndDispatchCustomEvent(
              POINTER_DOWN_OUTSIDE,
              handlePointerDownOutside,
              eventDetail,
              { discrete: true }
            );
          }
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        __name11(handleAndDispatchPointerDownOutsideEvent2, "handleAndDispatchPointerDownOutsideEvent");
        if (!shouldHandlePointerDownOutside(event.target)) {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          resetOutsideInteraction();
          isPointerInsideReactTreeRef.current = false;
          return;
        }
        const eventDetail = { originalEvent: event };
        isPointerDownOutsideRef.current = true;
        isDeferredPointerDownOutsideRef.current = deferPointerDownOutside && event.button === 0;
        interceptedOutsideInteractionEventsRef.current.clear();
        if (!deferPointerDownOutside || event.button !== 0) {
          handleAndDispatchPointerDownOutsideEvent2();
        } else {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
        resetOutsideInteraction();
      }
      isPointerInsideReactTreeRef.current = false;
    }, "handlePointerDown");
    const outsideInteractionEvents = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const eventName of outsideInteractionEvents) {
      ownerDocument.addEventListener(eventName, handleInteractionCapture, true);
      ownerDocument.addEventListener(eventName, handleInteractionBubble);
    }
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
      for (const eventName of outsideInteractionEvents) {
        ownerDocument.removeEventListener(eventName, handleInteractionCapture, true);
        ownerDocument.removeEventListener(eventName, handleInteractionBubble);
      }
    };
  }, [
    ownerDocument,
    handlePointerDownOutside,
    deferPointerDownOutside,
    isDeferredPointerDownOutsideRef,
    dismissableSurfaces,
    shouldHandlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ __name11(() => isPointerInsideReactTreeRef.current = true, "onPointerDownCapture")
  };
}
__name11(usePointerDownOutside, "usePointerDownOutside");
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
  const handleFocusOutside = useCallbackRef(onFocusOutside);
  const isFocusInsideReactTreeRef = React12.useRef(false);
  React12.useEffect(() => {
    const handleFocus = /* @__PURE__ */ __name11((event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    }, "handleFocus");
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: /* @__PURE__ */ __name11(() => isFocusInsideReactTreeRef.current = true, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ __name11(() => isFocusInsideReactTreeRef.current = false, "onBlurCapture")
  };
}
__name11(useFocusOutside, "useFocusOutside");
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
__name11(dispatchUpdate, "dispatchUpdate");
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}
__name11(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");

// ../../node_modules/.pnpm/@radix-ui+react-focus-scope_3b4e29b84c639c7da7ed6c275ef9f34b/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var React13 = __toESM(require("react"), 1);
var import_jsx_runtime5 = require("react/jsx-runtime");
var __defProp13 = Object.defineProperty;
var __name12 = (target, value) => __defProp13(target, "name", { value, configurable: true });
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FocusScope = /* @__PURE__ */ React13.forwardRef(
  /* @__PURE__ */ __name12(function FocusScope2(props, forwardedRef) {
    const {
      loop = false,
      trapped = false,
      onMountAutoFocus: onMountAutoFocusProp,
      onUnmountAutoFocus: onUnmountAutoFocusProp,
      ...scopeProps
    } = props;
    const [container, setContainer] = React13.useState(null);
    const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
    const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
    const lastFocusedElementRef = React13.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, setContainer);
    const focusScope = React13.useRef({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }).current;
    React13.useEffect(() => {
      if (trapped) {
        let handleFocusIn2 = function(event) {
          if (focusScope.paused || !container) return;
          const target = event.target;
          if (container.contains(target)) {
            lastFocusedElementRef.current = target;
          } else {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }, handleFocusOut2 = function(event) {
          if (focusScope.paused || !container) return;
          const relatedTarget = event.relatedTarget;
          if (relatedTarget === null) return;
          if (!container.contains(relatedTarget)) {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }, handleMutations2 = function(mutations) {
          const focusedElement = document.activeElement;
          if (focusedElement !== document.body) return;
          for (const mutation of mutations) {
            if (mutation.removedNodes.length > 0) focus(container);
          }
        };
        var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
        __name12(handleFocusIn2, "handleFocusIn");
        __name12(handleFocusOut2, "handleFocusOut");
        __name12(handleMutations2, "handleMutations");
        document.addEventListener("focusin", handleFocusIn2);
        document.addEventListener("focusout", handleFocusOut2);
        const mutationObserver = new MutationObserver(handleMutations2);
        if (container) mutationObserver.observe(container, { childList: true, subtree: true });
        return () => {
          document.removeEventListener("focusin", handleFocusIn2);
          document.removeEventListener("focusout", handleFocusOut2);
          mutationObserver.disconnect();
        };
      }
    }, [trapped, container, focusScope.paused]);
    React13.useEffect(() => {
      if (container) {
        focusScopesStack.add(focusScope);
        const previouslyFocusedElement = document.activeElement;
        const hasFocusedCandidate = container.contains(previouslyFocusedElement);
        if (!hasFocusedCandidate) {
          const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          container.dispatchEvent(mountEvent);
          if (!mountEvent.defaultPrevented) {
            focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
            if (document.activeElement === previouslyFocusedElement) {
              focus(container);
            }
          }
        }
        return () => {
          container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          setTimeout(() => {
            const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
            container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            container.dispatchEvent(unmountEvent);
            if (!unmountEvent.defaultPrevented) {
              focus(previouslyFocusedElement ?? document.body, { select: true });
            }
            container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            focusScopesStack.remove(focusScope);
          }, 0);
        };
      }
    }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
    const handleKeyDown = React13.useCallback(
      (event) => {
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
          const container2 = event.currentTarget;
          const [first, last] = getTabbableEdges(container2);
          const hasTabbableElementsInside = first && last;
          if (!hasTabbableElementsInside) {
            if (focusedElement === container2) event.preventDefault();
          } else {
            if (!event.shiftKey && focusedElement === last) {
              event.preventDefault();
              if (loop) focus(first, { select: true });
            } else if (event.shiftKey && focusedElement === first) {
              event.preventDefault();
              if (loop) focus(last, { select: true });
            }
          }
        }
      },
      [loop, trapped, focusScope.paused]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
  }, "FocusScope")
);
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
__name12(focusFirst, "focusFirst");
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
__name12(getTabbableEdges, "getTabbableEdges");
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ __name12((node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
__name12(getTabbableCandidates, "getTabbableCandidates");
function findVisible(elements, container) {
  const canUseCheckVisibility = typeof container.checkVisibility === "function" && container.checkVisibility({ checkVisibilityCSS: true });
  for (const element of elements) {
    const hidden = canUseCheckVisibility ? !element.checkVisibility({ checkVisibilityCSS: true }) : isHidden(element, { upTo: container });
    if (!hidden) {
      return element;
    }
  }
}
__name12(findVisible, "findVisible");
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
__name12(isHidden, "isHidden");
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
__name12(isSelectableInput, "isSelectableInput");
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
__name12(focus, "focus");
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope?.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      stack = arrayRemove(stack, focusScope);
      stack[0]?.resume();
    }
  };
}
__name12(createFocusScopesStack, "createFocusScopesStack");
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index = updatedArray.indexOf(item);
  if (index !== -1) {
    updatedArray.splice(index, 1);
  }
  return updatedArray;
}
__name12(arrayRemove, "arrayRemove");
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}
__name12(removeLinks, "removeLinks");

// ../../node_modules/.pnpm/@radix-ui+react-portal@1.1._7d49bbd59f67da7ea06e84940374bb40/node_modules/@radix-ui/react-portal/dist/index.mjs
var React14 = __toESM(require("react"), 1);
var ReactDOM2 = __toESM(require("react-dom"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var __defProp14 = Object.defineProperty;
var __name13 = (target, value) => __defProp14(target, "name", { value, configurable: true });
var Portal = /* @__PURE__ */ React14.forwardRef(
  /* @__PURE__ */ __name13(function Portal2(props, forwardedRef) {
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = React14.useState(false);
    useLayoutEffect2(() => setMounted(true), []);
    const container = containerProp || mounted && globalThis?.document?.body;
    return container ? ReactDOM2.createPortal(/* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
  }, "Portal")
);

// ../../node_modules/.pnpm/@radix-ui+react-focus-guard_0b6dc35411495c11d7017f4d480bfd1d/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var React15 = __toESM(require("react"), 1);
var __defProp15 = Object.defineProperty;
var __name14 = (target, value) => __defProp15(target, "name", { value, configurable: true });
var count2 = 0;
var guards = null;
function FocusGuards(props) {
  useFocusGuards();
  return props.children;
}
__name14(FocusGuards, "FocusGuards");
function useFocusGuards() {
  React15.useEffect(() => {
    if (!guards) {
      guards = { start: createFocusGuard(), end: createFocusGuard() };
    }
    const { start, end } = guards;
    if (document.body.firstElementChild !== start) {
      document.body.insertAdjacentElement("afterbegin", start);
    }
    if (document.body.lastElementChild !== end) {
      document.body.insertAdjacentElement("beforeend", end);
    }
    count2++;
    return () => {
      if (count2 === 1) {
        guards?.start.remove();
        guards?.end.remove();
        guards = null;
      }
      count2 = Math.max(0, count2 - 1);
    };
  }, []);
}
__name14(useFocusGuards, "useFocusGuards");
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}
__name14(createFocusGuard, "createFocusGuard");

// ../../node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.18_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/Combination.js
var React24 = __toESM(require("react"));

// ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.18_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/UI.js
var React18 = __toESM(require("react"));

// ../../node_modules/.pnpm/react-remove-scroll-bar@2.3_6765803d5ca9f56610f613c0cdac7218/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.18_react@19.2.8/node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.18_react@19.2.8/node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react3 = require("react");
function useCallbackRef2(initialValue, callback) {
  var ref = (0, import_react3.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.18_react@19.2.8/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React16 = __toESM(require("react"));
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React16.useLayoutEffect : React16.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef2(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.18_react@19.2.8/node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.18_react@19.2.8/node_modules/use-sidecar/dist/es2015/exports.js
var React17 = __toESM(require("react"));
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React17.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.18_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.18_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React18.forwardRef(function(props, parentRef) {
  var ref = React18.useRef(null);
  var _a = React18.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React18.createElement(
    React18.Fragment,
    null,
    enabled && React18.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noRelative, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React18.cloneElement(React18.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React18.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.18_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React21 = __toESM(require("react"));

// ../../node_modules/.pnpm/react-remove-scroll-bar@2.3_6765803d5ca9f56610f613c0cdac7218/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React20 = __toESM(require("react"));

// ../../node_modules/.pnpm/react-style-singleton@2.2.3_b6136bc3c152300a6c842c4b9688e211/node_modules/react-style-singleton/dist/es2015/hook.js
var React19 = __toESM(require("react"));

// ../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// ../../node_modules/.pnpm/react-style-singleton@2.2.3_b6136bc3c152300a6c842c4b9688e211/node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// ../../node_modules/.pnpm/react-style-singleton@2.2.3_b6136bc3c152300a6c842c4b9688e211/node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React19.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// ../../node_modules/.pnpm/react-style-singleton@2.2.3_b6136bc3c152300a6c842c4b9688e211/node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// ../../node_modules/.pnpm/react-remove-scroll-bar@2.3_6765803d5ca9f56610f613c0cdac7218/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// ../../node_modules/.pnpm/react-remove-scroll-bar@2.3_6765803d5ca9f56610f613c0cdac7218/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React20.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React20.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React20.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.18_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.18_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    if (!target) {
      break;
    }
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    var parent_1 = target.parentNode;
    target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.18_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React21.useRef([]);
  var touchStartRef = React21.useRef([0, 0]);
  var activeAxis = React21.useRef();
  var id = React21.useState(idCounter++)[0];
  var Style2 = React21.useState(styleSingleton)[0];
  var lastProps = React21.useRef(props);
  React21.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React21.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React21.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var selection = window.getSelection();
    var anchorNode = selection && selection.anchorNode;
    var isTouchingSelection = anchorNode ? anchorNode === target || anchorNode.contains(target) : false;
    if (isTouchingSelection) {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React21.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React21.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React21.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React21.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React21.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React21.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React21.createElement(
    React21.Fragment,
    null,
    inert ? React21.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React21.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.18_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.18_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React24.forwardRef(function(props, ref) {
  return React24.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// ../../node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// ../../node_modules/.pnpm/@radix-ui+react-dialog@1.1._f43cda4f5f60c6fd8f384ced683c6d90/node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_jsx_runtime7 = require("react/jsx-runtime");
var __defProp16 = Object.defineProperty;
var __name15 = (target, value) => __defProp16(target, "name", { value, configurable: true });
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = /* @__PURE__ */ __name15((props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = React25.useRef(null);
  const contentRef = React25.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DIALOG_NAME
  });
  const [titleCount, setTitleCount] = React25.useState(0);
  const [descriptionCount, setDescriptionCount] = React25.useState(0);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      titlePresent: titleCount > 0,
      descriptionPresent: descriptionCount > 0,
      setTitleCount,
      setDescriptionCount,
      open,
      onOpenChange: setOpen,
      onOpenToggle: React25.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
}, "Dialog");
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = /* @__PURE__ */ React25.forwardRef(
  /* @__PURE__ */ __name15(function DialogTrigger2(props, forwardedRef) {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : void 0,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }, "DialogTrigger")
);
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
  forceMount: void 0
});
var DialogPortal = /* @__PURE__ */ __name15((props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PortalProvider, { scope: __scopeDialog, forceMount, children: React25.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Portal, { asChild: true, container, children: child }) })) });
}, "DialogPortal");
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = /* @__PURE__ */ React25.forwardRef(
  /* @__PURE__ */ __name15(function DialogOverlay2(props, forwardedRef) {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }, "DialogOverlay")
);
var Slot = createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = /* @__PURE__ */ React25.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name15(function DialogOverlayImpl2(props, forwardedRef) {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    const registerDismissableSurface = useDismissableLayerSurface();
    const composedRefs = useComposedRefs(forwardedRef, registerDismissableSurface);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Combination_default, { as: Slot, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        Primitive.div,
        {
          "data-state": getState(context.open),
          ...overlayProps,
          ref: composedRefs,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }, "DialogOverlayImpl")
);
var CONTENT_NAME = "DialogContent";
var DialogContent = /* @__PURE__ */ React25.forwardRef(
  /* @__PURE__ */ __name15(function DialogContent2(props, forwardedRef) {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }, "DialogContent")
);
var DialogContentModal = /* @__PURE__ */ React25.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name15(function DialogContentModal2(props, forwardedRef) {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = React25.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    React25.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
);
var DialogContentNonModal = /* @__PURE__ */ React25.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name15(function DialogContentNonModal2(props, forwardedRef) {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = React25.useRef(false);
    const hasPointerDownOutsideRef = React25.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }, "DialogContentNonModal")
);
var DialogContentImpl = /* @__PURE__ */ React25.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name15(function DialogContentImpl2(props, forwardedRef) {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    useFocusGuards();
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      FocusScope,
      {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          DismissableLayer,
          {
            role: "dialog",
            id: context.contentId,
            "aria-describedby": context.descriptionPresent ? context.descriptionId : void 0,
            "aria-labelledby": context.titlePresent ? context.titleId : void 0,
            "data-state": getState(context.open),
            ...contentProps,
            ref: forwardedRef,
            deferPointerDownOutside: true,
            onDismiss: () => context.onOpenChange(false)
          }
        )
      }
    ) });
  }, "DialogContentImpl")
);
var TITLE_NAME = "DialogTitle";
var DialogTitle = /* @__PURE__ */ React25.forwardRef(
  /* @__PURE__ */ __name15(function DialogTitle2(props, forwardedRef) {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    const { setTitleCount } = context;
    useLayoutEffect2(() => {
      setTitleCount((count3) => count3 + 1);
      return () => setTitleCount((count3) => count3 - 1);
    }, [setTitleCount]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }, "DialogTitle")
);
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = /* @__PURE__ */ React25.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name15(function DialogDescription2(props, forwardedRef) {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    const { setDescriptionCount } = context;
    useLayoutEffect2(() => {
      setDescriptionCount((count3) => count3 + 1);
      return () => setDescriptionCount((count3) => count3 - 1);
    }, [setDescriptionCount]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }, "DialogDescription")
);
var CLOSE_NAME = "DialogClose";
var DialogClose = /* @__PURE__ */ React25.forwardRef(
  /* @__PURE__ */ __name15(function DialogClose2(props, forwardedRef) {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }, "DialogClose")
);
var WarningProvider = /* @__PURE__ */ __name15((props) => {
  return props.children;
}, "WarningProvider");
function getState(open) {
  return open ? "open" : "closed";
}
__name15(getState, "getState");

// src/components/Dialog.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var SCOPE_CLASS = "bd-payments-scope";
var Dialog2 = dist_exports.Root;
var DialogTrigger3 = dist_exports.Trigger;
var DialogClose3 = dist_exports.Close;
function DialogOverlay3({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    dist_exports.Overlay,
    {
      className: cn(SCOPE_CLASS, "bdp-overlay", className),
      ...props
    }
  );
}
function DialogContent3({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(dist_exports.Portal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(DialogOverlay3, {}),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      dist_exports.Content,
      {
        className: cn(SCOPE_CLASS, "bdp-content", className),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            dist_exports.Close,
            {
              "aria-label": "Close",
              className: "absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full text-(--bdp-muted-fg) transition-colors hover:bg-(--bdp-muted) hover:text-(--bdp-fg) focus:outline-none",
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(X, { className: "size-4" })
            }
          )
        ]
      }
    )
  ] });
}
function DialogTitle3({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    dist_exports.Title,
    {
      className: cn("text-base font-semibold leading-none", className),
      ...props
    }
  );
}
function DialogDescription3({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    dist_exports.Description,
    {
      className: cn("text-xs text-(--bdp-muted-fg)", className),
      ...props
    }
  );
}

// src/components/Icons.tsx
function svg(inner, bg) {
  return `data:image/svg+xml;charset=utf-8,` + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="28" fill="${bg}"/>${inner}</svg>`
  );
}
var BKASH_ICON = svg(
  `<text x="60" y="78" font-family="Arial Black,Arial,sans-serif" font-size="62" font-weight="900" fill="#FFFFFF" text-anchor="middle">b</text><text x="60" y="106" font-family="Arial,sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">Kash</text>`,
  "#E2136E"
);
var NAGAD_ICON = svg(
  `<path d="M60 22 C50 38 36 44 36 60 C36 75 46 84 60 88 C74 84 84 75 84 60 C84 44 70 38 60 22Z" fill="#FFD100"/><path d="M60 38 C54 48 48 52 48 62 C48 70 53 76 60 78 C67 76 72 70 72 62 C72 52 66 48 60 38Z" fill="#FFFFFF" opacity="0.9"/><text x="60" y="108" font-family="Arial,sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">NAGAD</text>`,
  "#F15A24"
);
var ROCKET_ICON = svg(
  `<path d="M60 18 C52 28 48 42 48 56 L48 70 L54 76 L54 68 C54 68 56 66 60 66 C64 66 66 68 66 68 L66 76 L72 70 L72 56 C72 42 68 28 60 18Z" fill="#FFFFFF"/><ellipse cx="60" cy="46" rx="7" ry="9" fill="#8C3494"/><path d="M44 62 C40 62 36 65 36 70 L48 68Z" fill="#FFFFFF" opacity="0.7"/><path d="M76 62 C80 62 84 65 84 70 L72 68Z" fill="#FFFFFF" opacity="0.7"/><text x="60" y="108" font-family="Arial,sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">Rocket</text>`,
  "#8C3494"
);
var BANK_TRANSFER_ICON = svg(
  `<polygon points="60,18 90,34 30,34" fill="#FFFFFF"/><rect x="30" y="36" width="60" height="6" rx="2" fill="#FFFFFF"/><rect x="34" y="44" width="8" height="26" rx="2" fill="#FFFFFF"/><rect x="47" y="44" width="8" height="26" rx="2" fill="#FFFFFF"/><rect x="60" y="44" width="8" height="26" rx="2" fill="#FFFFFF"/><rect x="73" y="44" width="8" height="26" rx="2" fill="#FFFFFF"/><rect x="28" y="72" width="64" height="6" rx="2" fill="#FFFFFF"/><text x="60" y="105" font-family="Arial,sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">BANK</text>`,
  "#1E3A8A"
);
var CARD_ICON = svg(
  `<rect x="18" y="32" width="84" height="56" rx="10" fill="#1E293B"/><rect x="18" y="44" width="84" height="14" fill="#334155"/><rect x="26" y="66" width="24" height="8" rx="3" fill="#475569"/><circle cx="74" cy="70" r="10" fill="#EB001B" opacity="0.9"/><circle cx="86" cy="70" r="10" fill="#F79E1B" opacity="0.75"/>`,
  "#4F46E5"
);
var COD_ICON = svg(
  `<rect x="24" y="42" width="50" height="38" rx="4" fill="#FFFFFF"/><path d="M74 42 L96 54 L96 80 L74 80Z" fill="#D1FAE5"/><path d="M74 42 L96 54 L74 54Z" fill="#FFFFFF" opacity="0.5"/><circle cx="38" cy="85" r="7" fill="#FFFFFF" stroke="#15803D" stroke-width="3"/><circle cx="70" cy="85" r="7" fill="#FFFFFF" stroke="#15803D" stroke-width="3"/><path d="M33 58 L40 66 L55 50" stroke="#15803D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  "#15803D"
);
var UPAY_ICON = svg(
  `<path d="M36 28 L36 68 C36 82 46 92 60 92 C74 92 84 82 84 68 L84 28 L70 28 L70 68 C70 74 65.5 78 60 78 C54.5 78 50 74 50 68 L50 28Z" fill="#FFFFFF"/><path d="M50 28 L70 28 L70 40 L50 40Z" fill="#FFB800"/><text x="60" y="113" font-family="Arial,sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">Upay</text>`,
  "#0284C7"
);
var CELLFIN_ICON = svg(
  `<rect x="42" y="22" width="36" height="62" rx="8" fill="#FFFFFF"/><rect x="48" y="30" width="24" height="36" rx="3" fill="#059669"/><circle cx="60" cy="76" r="4" fill="#059669"/><path d="M72 36 C78 30 86 30 92 36" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" fill="none"/><path d="M75 42 C79 38 85 38 89 42" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M78 48 C80 46 84 46 86 48" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" fill="none"/>`,
  "#059669"
);

// src/components/payment-brands.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var PAYMENT_BRANDS = {
  BKASH: {
    color: "#E2136E",
    colorDark: "#B50E58",
    onColor: "#FFFFFF",
    wordmark: "bKash",
    tagline: "Send Money from your bKash app",
    logoUrl: BKASH_ICON
  },
  NAGAD: {
    color: "#F15A24",
    colorDark: "#C4141B",
    onColor: "#FFFFFF",
    wordmark: "Nagad",
    tagline: "Send Money from your Nagad app",
    logoUrl: NAGAD_ICON
  },
  ROCKET: {
    color: "#8C3494",
    colorDark: "#6E2874",
    onColor: "#FFFFFF",
    wordmark: "Rocket",
    tagline: "Send Money from your Rocket account",
    logoUrl: ROCKET_ICON
  },
  BANK_TRANSFER: {
    color: "#1E3A8A",
    colorDark: "#172E6E",
    onColor: "#FFFFFF",
    wordmark: "Bank",
    tagline: "Transfer from any bank or app",
    logoUrl: BANK_TRANSFER_ICON
  },
  CARD: {
    color: "#4F46E5",
    colorDark: "#4338CA",
    onColor: "#FFFFFF",
    wordmark: "Card",
    tagline: "Visa, Mastercard or AmEx",
    logoUrl: CARD_ICON
  },
  COD: {
    color: "#15803D",
    colorDark: "#166534",
    onColor: "#FFFFFF",
    wordmark: "Cash",
    tagline: "Pay the courier when it arrives",
    logoUrl: COD_ICON
  },
  UPAY: {
    color: "#0284C7",
    colorDark: "#0369A1",
    onColor: "#FFFFFF",
    wordmark: "Upay",
    tagline: "Send Money from your Upay app",
    logoUrl: UPAY_ICON
  },
  CELLFIN: {
    color: "#059669",
    colorDark: "#047857",
    onColor: "#FFFFFF",
    wordmark: "CellFin",
    tagline: "Pay via CellFin app or Islami Bank",
    logoUrl: CELLFIN_ICON
  }
};
function resolveBrands(overrides) {
  if (!overrides) return PAYMENT_BRANDS;
  const out = {};
  Object.keys(PAYMENT_BRANDS).forEach((m) => {
    out[m] = { ...PAYMENT_BRANDS[m], ...overrides[m] };
  });
  return out;
}
function PaymentBrandMark({
  brand,
  logoUrl,
  size = "md",
  className
}) {
  const activeLogoUrl = logoUrl || brand.logoUrl;
  const dimensions = {
    sm: "size-9 text-[10px] rounded-lg",
    md: "size-11 text-[11px] rounded-xl",
    lg: "size-14 text-[13px] rounded-2xl"
  }[size];
  if (activeLogoUrl) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "span",
      {
        className: cn(
          "relative shrink-0 overflow-hidden",
          dimensions,
          className
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "img",
          {
            src: activeLogoUrl,
            alt: "",
            className: "absolute inset-0 size-full object-contain"
          }
        )
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "span",
    {
      className: cn(
        "flex shrink-0 items-center justify-center font-bold leading-none tracking-tight shadow-sm",
        dimensions,
        className
      ),
      style: {
        background: `linear-gradient(140deg, ${brand.color}, ${brand.colorDark})`,
        color: brand.onColor
      },
      "aria-hidden": true,
      children: brand.wordmark
    }
  );
}

// src/components/steps/CodChoiceStep.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function CodChoiceStep({
  advanceAmountLabel,
  description,
  onPayAdvance,
  onPayLater
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "div",
      {
        className: "rounded-xl border p-3.5 text-xs",
        style: {
          borderColor: "var(--bdp-warning-border)",
          backgroundColor: "var(--bdp-warning-bg)",
          color: "var(--bdp-warning-fg)"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "mb-1 text-sm font-bold", style: { color: "var(--bdp-warning-title)" }, children: "Cash on Delivery Options" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: description ?? `You can pay a ${advanceAmountLabel} advance online now to confirm immediately, or place the order now and pay later.` })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col gap-2.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        "button",
        {
          type: "button",
          onClick: onPayAdvance,
          className: "flex cursor-pointer items-center gap-3.5 rounded-xl border border-(--bdp-primary)/40 bg-(--bdp-primary)/5 p-3.5 text-left transition-all hover:border-(--bdp-primary) hover:bg-(--bdp-primary)/10",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--bdp-primary) text-(--bdp-primary-fg)", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CreditCard, { className: "size-5" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "text-sm font-bold text-(--bdp-fg)", children: [
                "Pay Advance Now (",
                advanceAmountLabel,
                ")"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "text-xs text-(--bdp-muted-fg)", children: [
                "Pay ",
                advanceAmountLabel,
                " now via an online method to confirm instantly."
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ChevronRight, { className: "size-4 shrink-0 text-(--bdp-primary)" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        "button",
        {
          type: "button",
          onClick: onPayLater,
          className: "flex cursor-pointer items-center gap-3.5 rounded-xl border border-(--bdp-border) p-3.5 text-left transition-all hover:bg-(--bdp-muted)",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--bdp-muted) text-(--bdp-muted-fg)", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Clock, { className: "size-5" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-sm font-semibold text-(--bdp-fg)", children: "Confirm Order (Pay Later)" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-xs text-(--bdp-muted-fg)", children: "Place the order now and verify payment details later." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ChevronRight, { className: "size-4 shrink-0 text-(--bdp-muted-fg)" })
          ]
        }
      )
    ] })
  ] });
}

// src/lib/payment-instructions.ts
function renderInstructions(template, vars) {
  return template.replace(/\{\{\s*amount\s*\}\}/g, vars.amount).replace(/\{\{\s*number\s*\}\}/g, vars.number).replace(/\{\{\s*orderNumber\s*\}\}/g, vars.orderNumber ?? "your order number").split("\n").map((l) => l.trim()).filter(Boolean);
}

// src/components/CopyableValue.tsx
var import_react4 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
function CopyableValue({ value, label, mono = true }) {
  const [copied, setCopied] = (0, import_react4.useState)(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-between gap-3 rounded-xl bg-white/10 px-3.5 py-2.5 backdrop-blur-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "min-w-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-[10px] font-medium uppercase tracking-wider opacity-70", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: cn("truncate text-base font-bold tracking-wide", mono && "font-mono"), children: value })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      "button",
      {
        type: "button",
        onClick: copy,
        className: "flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg bg-white/20 px-2.5 py-1.5 text-xs font-semibold transition-colors hover:bg-white/30",
        children: [
          copied ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Copy, { className: "size-3.5" }),
          copied ? "Copied" : "Copy"
        ]
      }
    )
  ] });
}

// src/components/FormField.tsx
var React26 = __toESM(require("react"));
var import_jsx_runtime12 = require("react/jsx-runtime");
var FormField = React26.forwardRef(
  ({ label, required, id, name, className, suffix, ...props }, ref) => {
    const reactId = React26.useId();
    const fieldId = id ?? name ?? reactId;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex flex-col gap-1.5", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
        "label",
        {
          htmlFor: fieldId,
          className: "text-sm font-medium text-(--bdp-fg) select-none",
          children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "ml-0.5 text-(--bdp-destructive)", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "input",
          {
            ref,
            id: fieldId,
            name,
            required,
            className: cn(
              "h-11 w-full min-w-0 rounded-lg border border-(--bdp-border) bg-transparent text-base text-(--bdp-fg) outline-none transition-colors placeholder:text-(--bdp-muted-fg) focus-visible:border-(--bdp-primary) disabled:pointer-events-none disabled:opacity-50 md:text-sm",
              suffix ? "pl-3.5 pr-10" : "px-3.5",
              className
            ),
            ...props
          }
        ),
        suffix && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "absolute right-2 flex items-center", children: suffix })
      ] })
    ] });
  }
);
FormField.displayName = "FormField";

// src/components/steps/DetailsStep.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
async function readClipboard() {
  try {
    return await navigator.clipboard.readText();
  } catch {
    return "";
  }
}
function DetailsStep({
  selected,
  brand,
  method,
  label,
  currentAmountLabel,
  needsTrxId,
  transactionId,
  setTransactionId,
  senderNumber,
  setSenderNumber,
  trxConstraints,
  trxValid,
  error,
  clearError
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex flex-col gap-4", children: [
    selected.accountNumber && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      "div",
      {
        className: "flex flex-col gap-2.5 rounded-2xl p-3.5 text-white",
        style: {
          background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})`
        },
        children: [
          selected.bankName && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm font-semibold", children: selected.bankName }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            CopyableValue,
            {
              label: method === "BANK_TRANSFER" ? "Account number" : `${label} number`,
              value: selected.accountNumber
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex flex-wrap gap-x-5 gap-y-1 px-1 text-[11px] text-white/80", children: [
            selected.accountName && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { children: [
              "Name: ",
              selected.accountName
            ] }),
            selected.accountType && method !== "BANK_TRANSFER" && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { children: [
              "Type: ",
              selected.accountType
            ] }),
            selected.branchName && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { children: [
              "Branch: ",
              selected.branchName
            ] }),
            selected.routingNumber && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { children: [
              "Routing: ",
              selected.routingNumber
            ] })
          ] })
        ]
      }
    ),
    selected.instructions && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("ol", { className: "flex flex-col gap-2.5", children: renderInstructions(selected.instructions, {
      amount: currentAmountLabel,
      number: selected.accountNumber ?? "our account"
    }).map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("li", { className: "flex items-center gap-2.5 text-xs", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "span",
        {
          className: "flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold leading-none text-white shadow-xs select-none",
          style: { backgroundColor: brand.color },
          children: i + 1
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-(--bdp-fg) opacity-85 leading-snug min-w-0 flex-1", children: line })
    ] }, i)) }),
    needsTrxId && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex flex-col gap-3 border-t border-(--bdp-border) pt-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          FormField,
          {
            label: method === "BANK_TRANSFER" ? "Transfer reference" : "Transaction ID (TrxID)",
            required: true,
            inputMode: "text",
            autoComplete: "off",
            autoCapitalize: "characters",
            spellCheck: false,
            maxLength: trxConstraints.maxLength,
            placeholder: method === "BANK_TRANSFER" ? "SLIP-00123" : "9F7A2B1C3D",
            className: "font-mono tracking-wide",
            value: transactionId,
            onChange: (e) => {
              setTransactionId(sanitiseTrxId(e.target.value, trxConstraints));
              clearError();
            },
            onPaste: (e) => {
              e.preventDefault();
              setTransactionId(
                extractTrxId(
                  e.clipboardData.getData("text"),
                  selected.transactionIdPattern,
                  trxConstraints
                )
              );
              clearError();
            },
            suffix: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "button",
              {
                type: "button",
                title: "Paste from clipboard",
                className: "flex size-6 cursor-pointer items-center justify-center rounded-md text-(--bdp-muted-fg) transition-colors hover:bg-(--bdp-muted) hover:text-(--bdp-fg) active:scale-95",
                onClick: async () => {
                  const text = await readClipboard();
                  if (text) {
                    setTransactionId(
                      extractTrxId(
                        text,
                        selected.transactionIdPattern,
                        trxConstraints
                      )
                    );
                    clearError();
                  }
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ClipboardPaste, { className: "size-3.5" })
              }
            )
          }
        ),
        trxConstraints.hint && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center justify-between px-0.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-[11px] text-(--bdp-muted-fg)", children: trxConstraints.hint }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
            "span",
            {
              className: cn(
                "font-mono text-[11px] tabular-nums",
                trxValid ? "text-emerald-600" : "text-(--bdp-muted-fg)"
              ),
              children: [
                transactionId.length,
                "/",
                trxConstraints.maxLength
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        FormField,
        {
          label: method === "BANK_TRANSFER" ? "Your account number (optional)" : "Your wallet number (optional)",
          inputMode: "numeric",
          autoComplete: "off",
          maxLength: 14,
          placeholder: "01XXXXXXXXX",
          className: "font-mono",
          value: senderNumber,
          onChange: (e) => setSenderNumber(e.target.value.replace(/[^\d+]/g, "")),
          suffix: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "button",
            {
              type: "button",
              title: "Paste from clipboard",
              className: "flex size-6 cursor-pointer items-center justify-center rounded-md text-(--bdp-muted-fg) transition-colors hover:bg-(--bdp-muted) hover:text-(--bdp-fg) active:scale-95",
              onClick: async () => {
                const text = await readClipboard();
                if (text)
                  setSenderNumber(text.replace(/[^\d+]/g, "").slice(0, 14));
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ClipboardPaste, { className: "size-3.5" })
            }
          )
        }
      )
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-xs font-medium text-(--bdp-destructive)", children: error })
  ] });
}

// src/components/steps/MethodStep.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function MethodStep({
  isAdvanceMode,
  advanceHint,
  options,
  brands,
  labelFor,
  busy,
  secureNote,
  onChoose
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex flex-col gap-2.5", children: [
    isAdvanceMode && advanceHint && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "mb-1 flex items-center gap-2 rounded-xl border border-(--bdp-primary)/20 bg-(--bdp-primary)/10 p-3 text-xs font-medium text-(--bdp-primary)", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Sparkles, { className: "size-4 shrink-0" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: advanceHint })
    ] }),
    options.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "py-6 text-center text-sm text-(--bdp-muted-fg)", children: "No payment methods are available right now. Please contact support." }),
    options.map((opt) => {
      const b = brands[opt.method];
      const loading = busy === opt.method;
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        "button",
        {
          type: "button",
          disabled: !!busy,
          onClick: () => onChoose(opt.method),
          style: loading ? { borderColor: b.color, background: `${b.color}0D` } : void 0,
          className: cn(
            "group flex cursor-pointer items-center gap-3 rounded-xl border border-(--bdp-border) p-3 text-left transition-all",
            !busy && "hover:bg-(--bdp-muted)",
            busy && !loading && "opacity-40"
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(PaymentBrandMark, { brand: b, logoUrl: opt.logoUrl }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-sm font-semibold text-(--bdp-fg)", children: labelFor(opt) }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "truncate text-xs text-(--bdp-muted-fg)", children: loading ? "Connecting\u2026" : b.tagline })
            ] }),
            loading ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(LoaderCircle, { className: "size-4 shrink-0 animate-spin", style: { color: b.color } }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChevronRight, { className: "size-4 shrink-0 text-(--bdp-muted-fg) transition-transform group-hover:translate-x-0.5" })
          ]
        },
        opt.method
      );
    }),
    secureNote && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { className: "mt-2 flex items-center justify-center gap-1.5 text-[11px] text-(--bdp-muted-fg)", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ShieldCheck, { className: "size-3.5" }),
      secureNote
    ] })
  ] });
}

// src/components/steps/ReviewStep.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function ReviewStep({
  selected,
  brand,
  label,
  transactionId,
  summary,
  needsTrxId
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex flex-col divide-y divide-(--bdp-border) rounded-xl border border-(--bdp-border)", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center gap-3 p-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PaymentBrandMark, { brand, logoUrl: selected.logoUrl, size: "sm" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-sm font-semibold text-(--bdp-fg)", children: label }),
          transactionId && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "truncate font-mono text-xs text-(--bdp-muted-fg)", children: transactionId.toUpperCase() })
        ] })
      ] }),
      summary.map((row) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-start justify-between gap-4 p-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "text-xs text-(--bdp-muted-fg)", children: row.label }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "text-right text-xs font-medium text-(--bdp-fg)", children: row.value })
      ] }, row.label))
    ] }),
    needsTrxId && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "rounded-xl bg-(--bdp-muted) px-3.5 py-3 text-xs leading-relaxed text-(--bdp-muted-fg)", children: [
      "We'll check this Transaction ID against our ",
      label,
      " account and confirm your order."
    ] })
  ] });
}

// src/components/PaymentDialog.tsx
var import_jsx_runtime16 = (
  // Method — credit card
  require("react/jsx-runtime")
);
function PaymentDialog({
  open,
  onOpenChange,
  options,
  amountLabel,
  summary,
  onConfirm,
  placing = false,
  initialPaymentMethod,
  branding,
  advance,
  brands: brandOverrides,
  labels: labelOverrides
}) {
  const brands = (0, import_react5.useMemo)(() => resolveBrands(brandOverrides), [brandOverrides]);
  const labels = (0, import_react5.useMemo)(
    () => ({ ...PAYMENT_METHOD_LABELS, ...labelOverrides }),
    [labelOverrides]
  );
  const advanceEnabled = !!advance?.enabled;
  const [step, setStep] = (0, import_react5.useState)("method");
  const [method, setMethod] = (0, import_react5.useState)(null);
  const [isAdvanceMode, setIsAdvanceMode] = (0, import_react5.useState)(false);
  const [transactionId, setTransactionId] = (0, import_react5.useState)("");
  const [senderNumber, setSenderNumber] = (0, import_react5.useState)("");
  const [error, setError] = (0, import_react5.useState)(null);
  const [busy, setBusy] = (0, import_react5.useState)(null);
  const [successResult, setSuccessResult] = (0, import_react5.useState)(null);
  (0, import_react5.useEffect)(() => {
    if (!open) return;
    if (initialPaymentMethod === "COD") {
      setMethod("COD");
      setStep(advanceEnabled ? "cod-choice" : "review");
    } else {
      setStep("method");
      setMethod(null);
    }
    setIsAdvanceMode(false);
    setTransactionId("");
    setSenderNumber("");
    setError(null);
    setBusy(null);
    setSuccessResult(null);
  }, [open, initialPaymentMethod, advanceEnabled]);
  const filteredOptions = (0, import_react5.useMemo)(() => {
    let list = [...options];
    if (initialPaymentMethod !== "COD" || isAdvanceMode) {
      list = list.filter((o) => o.method !== "COD");
    }
    return list;
  }, [options, initialPaymentMethod, isAdvanceMode]);
  const selected = (0, import_react5.useMemo)(
    () => (method === "COD" ? options : filteredOptions).find(
      (o) => o.method === method
    ) ?? null,
    [filteredOptions, options, method]
  );
  const brand = method ? brands[method] : null;
  const labelFor = (opt) => opt.label ?? labels[opt.method];
  const selectedLabel = selected ? labelFor(selected) : method ? labels[method] : "";
  const needsTrxId = !!selected?.requireTransactionId;
  const trxConstraints = (0, import_react5.useMemo)(
    () => parseTrxIdConstraints(selected?.transactionIdPattern),
    [selected?.transactionIdPattern]
  );
  const trxValid = (0, import_react5.useMemo)(
    () => !needsTrxId || isValidTrxId(
      transactionId,
      selected?.transactionIdPattern,
      trxConstraints
    ),
    [needsTrxId, transactionId, selected?.transactionIdPattern, trxConstraints]
  );
  async function chooseMethod(next) {
    if (busy) return;
    setBusy(next);
    setError(null);
    await new Promise((r2) => setTimeout(r2, 420));
    setMethod(next);
    setStep("details");
    setBusy(null);
  }
  async function goToReview() {
    if (!selected || busy) return;
    if (needsTrxId) {
      if (!transactionId) {
        setError(
          method === "BANK_TRANSFER" ? "Enter the reference number from your transfer receipt." : "Enter the Transaction ID from your confirmation SMS."
        );
        return;
      }
      if (transactionId.length < trxConstraints.minLength) {
        setError(
          `That's too short \u2014 a ${selectedLabel} ID is ${trxConstraints.hint ?? "longer than this"}.`
        );
        return;
      }
      if (!trxValid) {
        setError("That doesn't look right \u2014 copy it exactly from your SMS.");
        return;
      }
    }
    setError(null);
    setBusy("step");
    await new Promise((r2) => setTimeout(r2, 500));
    setStep("review");
    setBusy(null);
  }
  async function confirm() {
    if (!method) return;
    const result = {
      method,
      transactionId: needsTrxId ? transactionId : void 0,
      senderNumber: needsTrxId ? senderNumber.trim() || void 0 : void 0,
      isAdvance: isAdvanceMode || void 0
    };
    try {
      await onConfirm(result);
    } finally {
      setSuccessResult(result);
      setStep("success");
    }
  }
  const currentAmountLabel = isAdvanceMode && advance ? advance.amountLabel : amountLabel;
  const stepIndex = step === "method" || step === "cod-choice" ? 0 : step === "details" ? 1 : 2;
  const showStepRail = step !== "success";
  const secureNote = branding?.secureNote === void 0 ? "Every payment is verified before your order ships" : branding.secureNote;
  const showFooter = step === "details" || step === "review";
  const stepIcons = [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      "svg",
      {
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "size-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "rect",
            {
              x: "2",
              y: "5",
              width: "16",
              height: "11",
              rx: "2",
              stroke: "currentColor",
              strokeWidth: "1.6"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M2 9h16", stroke: "currentColor", strokeWidth: "1.6" })
        ]
      },
      "method"
    ),
    // Details — document
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      "svg",
      {
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "size-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "path",
            {
              d: "M6 2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
              stroke: "currentColor",
              strokeWidth: "1.6"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "path",
            {
              d: "M7 8h6M7 12h4",
              stroke: "currentColor",
              strokeWidth: "1.6",
              strokeLinecap: "round"
            }
          )
        ]
      },
      "details"
    ),
    // Confirm — shield check
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      "svg",
      {
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "size-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "path",
            {
              d: "M10 2l6 2.5v5c0 3.5-2.5 6-6 7.5C4.5 15.5 2 13 2 9.5v-5L10 2z",
              stroke: "currentColor",
              strokeWidth: "1.6"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "path",
            {
              d: "M7 10l2 2 4-4",
              stroke: "currentColor",
              strokeWidth: "1.6",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ]
      },
      "confirm"
    )
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    Dialog2,
    {
      open,
      onOpenChange: (v) => !placing && !busy && onOpenChange(v),
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
        DialogContent3,
        {
          showCloseButton: !placing && !busy,
          onInteractOutside: (e) => e.preventDefault(),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
              "div",
              {
                className: cn(
                  "relative bg-(--bdp-bg) px-5 pb-4 text-(--bdp-fg) transition-colors",
                  step === "method" || step === "cod-choice" ? "pt-9" : "pt-4"
                ),
                children: [
                  step === "method" || step === "cod-choice" ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col items-center gap-3 text-center", children: [
                    branding?.logoUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                        "img",
                        {
                          src: branding.logoUrl,
                          alt: branding?.title ?? "Logo",
                          className: "size-16 rounded-full object-cover shadow-sm ring-4 ring-(--bdp-primary)/20"
                        }
                      )
                    ) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      "div",
                      {
                        className: "flex size-16 items-center justify-center rounded-full font-bold text-2xl shadow-sm uppercase tracking-tight",
                        style: {
                          background: "rgba(99,102,241,0.12)",
                          color: "#6366f1"
                        },
                        children: (branding?.title ?? "M").charAt(0) || "M"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "space-y-0.5", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogTitle3, { className: "text-[22px] font-bold tracking-tight text-(--bdp-fg)", children: branding?.title ?? "Moksedul's Store" }),
                      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogDescription3, { className: "text-sm text-(--bdp-muted-fg) leading-relaxed", children: step === "cod-choice" ? "Cash on Delivery Options" : isAdvanceMode && advance ? `Pay ${advance.amountLabel} Advance via Online Payment` : branding?.subtitle ?? "Choose your preferred payment method" })
                    ] })
                  ] }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setError(null);
                          setStep(step === "review" ? "details" : "method");
                        },
                        className: "flex size-8 cursor-pointer items-center justify-center rounded-full bg-(--bdp-muted) text-(--bdp-fg) transition-colors hover:opacity-80",
                        "aria-label": "Back",
                        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ArrowLeft, { className: "size-4" })
                      }
                    ),
                    brand && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      PaymentBrandMark,
                      {
                        brand,
                        logoUrl: selected?.logoUrl,
                        size: "sm",
                        className: "ring-1 ring-black/5"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogTitle3, { className: "truncate text-sm", children: selectedLabel }),
                      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogDescription3, { className: "text-xs text-(--bdp-muted-fg)", children: step === "details" ? isAdvanceMode && advance ? `Pay ${advance.amountLabel} Advance` : "Payment details" : "Review & confirm" })
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "mt-5 flex items-center justify-between rounded-xl border border-(--bdp-border) bg-(--bdp-bg) px-4 py-3.5 shadow-xs", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "text-xs font-semibold uppercase tracking-widest text-(--bdp-muted-fg)", children: isAdvanceMode ? "Advance Payable" : "Amount Payable" }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      "span",
                      {
                        className: "text-xl font-extrabold",
                        style: { color: "var(--bdp-primary)" },
                        children: currentAmountLabel
                      }
                    )
                  ] })
                ]
              }
            ),
            showStepRail && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex items-center px-5 py-3", children: ["Method", "Details", "Confirm"].map((label, i) => {
              const active = i <= stepIndex;
              const activeColor = brand?.color ?? "var(--bdp-primary)";
              return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react5.default.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col items-center gap-1.5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                    "span",
                    {
                      className: cn(
                        "flex size-9 items-center justify-center rounded-full border-2 transition-colors",
                        active ? "text-white" : "text-(--bdp-muted-fg) border-(--bdp-border) bg-(--bdp-bg)"
                      ),
                      style: active ? {
                        backgroundColor: activeColor,
                        borderColor: activeColor
                      } : void 0,
                      children: stepIcons[i]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                    "span",
                    {
                      className: cn(
                        "text-[10px] font-semibold whitespace-nowrap",
                        active ? "text-(--bdp-fg)" : "text-(--bdp-muted-fg)"
                      ),
                      children: label
                    }
                  )
                ] }),
                i < 2 && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "span",
                  {
                    className: "mb-3.5 h-0.5 flex-1 rounded-full transition-colors",
                    style: {
                      backgroundColor: i < stepIndex ? brand?.color ?? "var(--bdp-primary)" : "var(--bdp-border)"
                    }
                  }
                )
              ] }, label);
            }) }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "max-h-[55vh] overflow-y-auto px-5 py-4", children: [
              step === "method" && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                MethodStep,
                {
                  isAdvanceMode,
                  advanceHint: advance ? `Select an online method below to pay your ${advance.amountLabel} Advance.` : void 0,
                  options: filteredOptions,
                  brands,
                  labelFor,
                  busy,
                  secureNote,
                  onChoose: chooseMethod
                }
              ),
              step === "cod-choice" && advance && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                CodChoiceStep,
                {
                  advanceAmountLabel: advance.amountLabel,
                  description: advance.description,
                  onPayAdvance: () => {
                    setIsAdvanceMode(true);
                    setStep("method");
                  },
                  onPayLater: () => onConfirm({ method: "COD" })
                }
              ),
              step === "details" && selected && brand && method && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                DetailsStep,
                {
                  selected,
                  brand,
                  method,
                  label: selectedLabel,
                  currentAmountLabel,
                  needsTrxId,
                  transactionId,
                  setTransactionId,
                  senderNumber,
                  setSenderNumber,
                  trxConstraints,
                  trxValid,
                  error,
                  clearError: () => setError(null)
                }
              ),
              step === "review" && brand && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                ReviewStep,
                {
                  selected: selected ?? { method },
                  brand,
                  label: selectedLabel,
                  transactionId,
                  summary,
                  needsTrxId
                }
              ),
              step === "success" && successResult && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col items-center py-6 text-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "div",
                  {
                    className: "mb-5 flex size-20 items-center justify-center rounded-full",
                    style: { backgroundColor: `${brand?.color ?? "#22c55e"}18` },
                    children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      "div",
                      {
                        className: "flex size-14 items-center justify-center rounded-full shadow-lg",
                        style: {
                          backgroundColor: brand?.color ?? "#22c55e",
                          boxShadow: `0 8px 24px ${brand?.color ?? "#22c55e"}40`
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CircleCheck, { className: "size-8 text-white", strokeWidth: 2.5 })
                      }
                    )
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-xl font-bold text-(--bdp-fg)", children: "Order Confirmed!" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mt-1.5 text-sm text-(--bdp-muted-fg)", children: successResult.isAdvance ? `Your ${currentAmountLabel} advance has been received.` : "We've received your payment. Thank you!" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "mt-5 w-full rounded-xl border border-(--bdp-border) text-left text-xs", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center justify-between border-b border-(--bdp-border) px-4 py-3", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "font-medium text-(--bdp-muted-fg)", children: "Payment via" }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "font-bold text-(--bdp-fg)", children: selectedLabel })
                  ] }),
                  successResult.transactionId && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center justify-between border-b border-(--bdp-border) px-4 py-3", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "font-medium text-(--bdp-muted-fg)", children: "Transaction ID" }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "font-mono font-bold text-(--bdp-fg)", children: successResult.transactionId })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center justify-between px-4 py-3", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "font-medium text-(--bdp-muted-fg)", children: "Amount Paid" }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "font-bold", style: { color: brand?.color ?? "var(--bdp-primary)" }, children: currentAmountLabel })
                  ] })
                ] })
              ] })
            ] }),
            showFooter && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "border-t border-(--bdp-border) p-4", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              Button,
              {
                style: brand ? {
                  background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})`,
                  color: brand.onColor
                } : void 0,
                disabled: placing || !!busy || step === "details" && !trxValid,
                onClick: step === "details" ? goToReview : confirm,
                children: placing ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(LoaderCircle, { className: "size-4 animate-spin" }),
                  " Placing order\u2026"
                ] }) : busy === "step" ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(LoaderCircle, { className: "size-4 animate-spin" }),
                  " Verifying details\u2026"
                ] }) : step === "details" ? "Continue" : `Confirm order \xB7 ${currentAmountLabel}`
              }
            ) }),
            step === "success" && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "border-t border-(--bdp-border) p-4", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              Button,
              {
                style: brand ? {
                  background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})`,
                  color: brand.onColor
                } : void 0,
                onClick: () => onOpenChange(false),
                children: "Close"
              }
            ) })
          ]
        }
      )
    }
  );
}

// src/components/BdPaymentProvider.tsx
var import_react6 = require("react");

// src/lib/theme.ts
var VAR_MAP = {
  primary: "--bdp-primary",
  primaryForeground: "--bdp-primary-fg",
  background: "--bdp-bg",
  foreground: "--bdp-fg",
  muted: "--bdp-muted",
  mutedForeground: "--bdp-muted-fg",
  border: "--bdp-border",
  destructive: "--bdp-destructive",
  radius: "--bdp-radius"
};
var DARK_VARS = {
  "--bdp-bg": "#18181b",
  "--bdp-fg": "#fafafa",
  "--bdp-muted": "#27272a",
  "--bdp-muted-fg": "#a1a1aa",
  "--bdp-border": "#3f3f46",
  "--bdp-primary": "#6366f1",
  "--bdp-primary-fg": "#ffffff",
  "--bdp-destructive": "#f87171"
};
function declarations(vars) {
  return Object.entries(vars).map(([k, v]) => `${k}: ${v};`).join(" ");
}
function buildThemeCss(theme, colorScheme) {
  const vars = {};
  if (colorScheme === "dark") Object.assign(vars, DARK_VARS);
  if (theme) {
    for (const [key, val] of Object.entries(theme)) {
      if (val) vars[VAR_MAP[key]] = val;
    }
  }
  if (Object.keys(vars).length === 0) return "";
  const scheme = colorScheme ? ` color-scheme: ${colorScheme};` : "";
  return `.bd-payments-scope { ${declarations(vars)}${scheme} }`;
}

// src/styles.ts
var cssString = `/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  .bd-payments-scope, .bd-payments-scope :host {
    --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-slate-900: oklch(20.8% 0.042 265.755);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --tracking-tight: -0.025em;
    --tracking-wide: 0.025em;
    --tracking-wider: 0.05em;
    --tracking-widest: 0.1em;
    --leading-snug: 1.375;
    --leading-relaxed: 1.625;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --animate-spin: spin 1s linear infinite;
    --blur-sm: 8px;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
  }
}
@layer base {
  .bd-payments-scope *, .bd-payments-scope ::after, .bd-payments-scope ::before, .bd-payments-scope ::backdrop, .bd-payments-scope ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  .bd-payments-scope html, .bd-payments-scope :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji');
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  .bd-payments-scope hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  .bd-payments-scope abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  .bd-payments-scope h1, .bd-payments-scope h2, .bd-payments-scope h3, .bd-payments-scope h4, .bd-payments-scope h5, .bd-payments-scope h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  .bd-payments-scope a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  .bd-payments-scope b, .bd-payments-scope strong {
    font-weight: bolder;
  }
  .bd-payments-scope code, .bd-payments-scope kbd, .bd-payments-scope samp, .bd-payments-scope pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  .bd-payments-scope small {
    font-size: 80%;
  }
  .bd-payments-scope sub, .bd-payments-scope sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  .bd-payments-scope sub {
    bottom: -0.25em;
  }
  .bd-payments-scope sup {
    top: -0.5em;
  }
  .bd-payments-scope table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  .bd-payments-scope :-moz-focusring:where(:not(iframe)) {
    outline: auto;
  }
  .bd-payments-scope progress {
    vertical-align: baseline;
  }
  .bd-payments-scope summary {
    display: list-item;
  }
  .bd-payments-scope ol, .bd-payments-scope ul, .bd-payments-scope menu {
    list-style: none;
  }
  .bd-payments-scope img, .bd-payments-scope svg, .bd-payments-scope video, .bd-payments-scope canvas, .bd-payments-scope audio, .bd-payments-scope iframe, .bd-payments-scope embed, .bd-payments-scope object {
    display: block;
    vertical-align: middle;
  }
  .bd-payments-scope img, .bd-payments-scope video {
    max-width: 100%;
    height: auto;
  }
  .bd-payments-scope button, .bd-payments-scope input, .bd-payments-scope select, .bd-payments-scope optgroup, .bd-payments-scope textarea, .bd-payments-scope ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  .bd-payments-scope :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  .bd-payments-scope :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  .bd-payments-scope ::file-selector-button {
    margin-inline-end: 4px;
  }
  .bd-payments-scope ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    .bd-payments-scope ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  .bd-payments-scope textarea {
    resize: vertical;
  }
  .bd-payments-scope ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  .bd-payments-scope ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  .bd-payments-scope ::-webkit-datetime-edit {
    display: inline-flex;
  }
  .bd-payments-scope ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  .bd-payments-scope ::-webkit-datetime-edit, .bd-payments-scope ::-webkit-datetime-edit-year-field, .bd-payments-scope ::-webkit-datetime-edit-month-field, .bd-payments-scope ::-webkit-datetime-edit-day-field, .bd-payments-scope ::-webkit-datetime-edit-hour-field, .bd-payments-scope ::-webkit-datetime-edit-minute-field, .bd-payments-scope ::-webkit-datetime-edit-second-field, .bd-payments-scope ::-webkit-datetime-edit-millisecond-field, .bd-payments-scope ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  .bd-payments-scope ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  .bd-payments-scope :-moz-ui-invalid {
    box-shadow: none;
  }
  .bd-payments-scope button, .bd-payments-scope input:where([type='button'], [type='reset'], [type='submit']), .bd-payments-scope ::file-selector-button {
    appearance: button;
  }
  .bd-payments-scope ::-webkit-inner-spin-button, .bd-payments-scope ::-webkit-outer-spin-button {
    height: auto;
  }
  .bd-payments-scope [hidden]:where(:not([hidden='until-found'])) {
    display: none !important;
  }
}
@layer utilities {
  .bd-payments-scope .\\@container {
    container-type: inline-size;
  }
  .bd-payments-scope .collapse {
    visibility: collapse;
  }
  .bd-payments-scope .invisible {
    visibility: hidden;
  }
  .bd-payments-scope .visible {
    visibility: visible;
  }
  .bd-payments-scope .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border-width: 0;
  }
  .bd-payments-scope .not-sr-only {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip-path: none;
    white-space: normal;
  }
  .bd-payments-scope .absolute {
    position: absolute;
  }
  .bd-payments-scope .fixed {
    position: fixed;
  }
  .bd-payments-scope .relative {
    position: relative;
  }
  .bd-payments-scope .static {
    position: static;
  }
  .bd-payments-scope .sticky {
    position: sticky;
  }
  .bd-payments-scope .inset-0 {
    inset: 0px;
  }
  .bd-payments-scope .top-1 {
    top: var(--spacing);
  }
  .bd-payments-scope .top-4 {
    top: calc(var(--spacing) * 4);
  }
  .bd-payments-scope .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .bd-payments-scope .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .bd-payments-scope .left-1 {
    left: var(--spacing);
  }
  .bd-payments-scope .isolate {
    isolation: isolate;
  }
  .bd-payments-scope .isolation-auto {
    isolation: auto;
  }
  .bd-payments-scope .z-10 {
    z-index: 10;
  }
  .bd-payments-scope .container {
    width: 100%;
    @media (width >= 40rem) {
      max-width: 40rem;
    }
    @media (width >= 48rem) {
      max-width: 48rem;
    }
    @media (width >= 64rem) {
      max-width: 64rem;
    }
    @media (width >= 80rem) {
      max-width: 80rem;
    }
    @media (width >= 96rem) {
      max-width: 96rem;
    }
  }
  .bd-payments-scope .mt-0 {
    margin-top: 0px;
  }
  .bd-payments-scope .mt-1\\.5 {
    margin-top: calc(var(--spacing) * 1.5);
  }
  .bd-payments-scope .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .bd-payments-scope .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .bd-payments-scope .mt-5 {
    margin-top: calc(var(--spacing) * 5);
  }
  .bd-payments-scope .mt-px {
    margin-top: 1px;
  }
  .bd-payments-scope .mb-1 {
    margin-bottom: var(--spacing);
  }
  .bd-payments-scope .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .bd-payments-scope .mb-3\\.5 {
    margin-bottom: calc(var(--spacing) * 3.5);
  }
  .bd-payments-scope .mb-5 {
    margin-bottom: calc(var(--spacing) * 5);
  }
  .bd-payments-scope .ml-0 {
    margin-left: 0px;
  }
  .bd-payments-scope .ml-0\\.5 {
    margin-left: calc(var(--spacing) * 0.5);
  }
  .bd-payments-scope .block {
    display: block;
  }
  .bd-payments-scope .contents {
    display: contents;
  }
  .bd-payments-scope .flex {
    display: flex;
  }
  .bd-payments-scope .flow-root {
    display: flow-root;
  }
  .bd-payments-scope .grid {
    display: grid;
  }
  .bd-payments-scope .hidden {
    display: none;
  }
  .bd-payments-scope .inline {
    display: inline;
  }
  .bd-payments-scope .inline-block {
    display: inline-block;
  }
  .bd-payments-scope .inline-flex {
    display: inline-flex;
  }
  .bd-payments-scope .inline-grid {
    display: inline-grid;
  }
  .bd-payments-scope .inline-table {
    display: inline-table;
  }
  .bd-payments-scope .list-item {
    display: list-item;
  }
  .bd-payments-scope .table {
    display: table;
  }
  .bd-payments-scope .table-caption {
    display: table-caption;
  }
  .bd-payments-scope .table-cell {
    display: table-cell;
  }
  .bd-payments-scope .table-column {
    display: table-column;
  }
  .bd-payments-scope .table-column-group {
    display: table-column-group;
  }
  .bd-payments-scope .table-footer-group {
    display: table-footer-group;
  }
  .bd-payments-scope .table-header-group {
    display: table-header-group;
  }
  .bd-payments-scope .table-row {
    display: table-row;
  }
  .bd-payments-scope .table-row-group {
    display: table-row-group;
  }
  .bd-payments-scope .size-3 {
    width: calc(var(--spacing) * 3);
    height: calc(var(--spacing) * 3);
  }
  .bd-payments-scope .size-3\\.5 {
    width: calc(var(--spacing) * 3.5);
    height: calc(var(--spacing) * 3.5);
  }
  .bd-payments-scope .size-4 {
    width: calc(var(--spacing) * 4);
    height: calc(var(--spacing) * 4);
  }
  .bd-payments-scope .size-5 {
    width: calc(var(--spacing) * 5);
    height: calc(var(--spacing) * 5);
  }
  .bd-payments-scope .size-6 {
    width: calc(var(--spacing) * 6);
    height: calc(var(--spacing) * 6);
  }
  .bd-payments-scope .size-8 {
    width: calc(var(--spacing) * 8);
    height: calc(var(--spacing) * 8);
  }
  .bd-payments-scope .size-9 {
    width: calc(var(--spacing) * 9);
    height: calc(var(--spacing) * 9);
  }
  .bd-payments-scope .size-10 {
    width: calc(var(--spacing) * 10);
    height: calc(var(--spacing) * 10);
  }
  .bd-payments-scope .size-11 {
    width: calc(var(--spacing) * 11);
    height: calc(var(--spacing) * 11);
  }
  .bd-payments-scope .size-13 {
    width: calc(var(--spacing) * 13);
    height: calc(var(--spacing) * 13);
  }
  .bd-payments-scope .size-14 {
    width: calc(var(--spacing) * 14);
    height: calc(var(--spacing) * 14);
  }
  .bd-payments-scope .size-16 {
    width: calc(var(--spacing) * 16);
    height: calc(var(--spacing) * 16);
  }
  .bd-payments-scope .size-20 {
    width: calc(var(--spacing) * 20);
    height: calc(var(--spacing) * 20);
  }
  .bd-payments-scope .size-full {
    width: 100%;
    height: 100%;
  }
  .bd-payments-scope .h-0 {
    height: 0px;
  }
  .bd-payments-scope .h-0\\.5 {
    height: calc(var(--spacing) * 0.5);
  }
  .bd-payments-scope .h-1 {
    height: var(--spacing);
  }
  .bd-payments-scope .h-11 {
    height: calc(var(--spacing) * 11);
  }
  .bd-payments-scope .max-h-\\[55vh\\] {
    max-height: 55vh;
  }
  .bd-payments-scope .w-full {
    width: 100%;
  }
  .bd-payments-scope .min-w-0 {
    min-width: 0px;
  }
  .bd-payments-scope .flex-1 {
    flex: 1;
  }
  .bd-payments-scope .flex-shrink {
    flex-shrink: 1;
  }
  .bd-payments-scope .shrink {
    flex-shrink: 1;
  }
  .bd-payments-scope .shrink-0 {
    flex-shrink: 0;
  }
  .bd-payments-scope .flex-grow {
    flex-grow: 1;
  }
  .bd-payments-scope .grow {
    flex-grow: 1;
  }
  .bd-payments-scope .border-collapse {
    border-collapse: collapse;
  }
  .bd-payments-scope .-translate-x-1 {
    --tw-translate-x: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .bd-payments-scope .-translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .bd-payments-scope .translate-none {
    translate: none;
  }
  .bd-payments-scope .scale-3d {
    scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z);
  }
  .bd-payments-scope .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .bd-payments-scope .animate-spin {
    animation: var(--animate-spin);
  }
  .bd-payments-scope .cursor-pointer {
    cursor: pointer;
  }
  .bd-payments-scope .touch-pinch-zoom {
    --tw-pinch-zoom: pinch-zoom;
    touch-action: var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,);
  }
  .bd-payments-scope .resize {
    resize: both;
  }
  .bd-payments-scope .flex-col {
    flex-direction: column;
  }
  .bd-payments-scope .flex-wrap {
    flex-wrap: wrap;
  }
  .bd-payments-scope .items-center {
    align-items: center;
  }
  .bd-payments-scope .items-start {
    align-items: flex-start;
  }
  .bd-payments-scope .justify-between {
    justify-content: space-between;
  }
  .bd-payments-scope .justify-center {
    justify-content: center;
  }
  .bd-payments-scope .gap-0 {
    gap: 0px;
  }
  .bd-payments-scope .gap-1 {
    gap: var(--spacing);
  }
  .bd-payments-scope .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .bd-payments-scope .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .bd-payments-scope .gap-2\\.5 {
    gap: calc(var(--spacing) * 2.5);
  }
  .bd-payments-scope .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .bd-payments-scope .gap-3\\.5 {
    gap: calc(var(--spacing) * 3.5);
  }
  .bd-payments-scope .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .bd-payments-scope :where(.space-y-0 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  .bd-payments-scope :where(.space-y-0\\.5 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 0.5) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 0.5) * calc(1 - var(--tw-space-y-reverse)));
  }
  .bd-payments-scope :where(.space-y-1 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(var(--spacing) * var(--tw-space-y-reverse));
    margin-block-end: calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)));
  }
  .bd-payments-scope :where(.space-y-reverse > :not(:last-child)) {
    --tw-space-y-reverse: 1;
  }
  .bd-payments-scope .gap-x-5 {
    column-gap: calc(var(--spacing) * 5);
  }
  .bd-payments-scope :where(.space-x-reverse > :not(:last-child)) {
    --tw-space-x-reverse: 1;
  }
  .bd-payments-scope .gap-y-1 {
    row-gap: var(--spacing);
  }
  .bd-payments-scope :where(.divide-x > :not(:last-child)) {
    --tw-divide-x-reverse: 0;
    border-inline-style: var(--tw-border-style);
    border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));
    border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
  }
  .bd-payments-scope :where(.divide-y > :not(:last-child)) {
    --tw-divide-y-reverse: 0;
    border-bottom-style: var(--tw-border-style);
    border-top-style: var(--tw-border-style);
    border-top-width: calc(1px * var(--tw-divide-y-reverse));
    border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  }
  .bd-payments-scope :where(.divide-y-reverse > :not(:last-child)) {
    --tw-divide-y-reverse: 1;
  }
  .bd-payments-scope :where(.divide-\\(--bdp-border\\) > :not(:last-child)) {
    border-color: var(--bdp-border);
  }
  .bd-payments-scope .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .bd-payments-scope .overflow-hidden {
    overflow: hidden;
  }
  .bd-payments-scope .overflow-y-auto {
    overflow-y: auto;
  }
  .bd-payments-scope .rounded {
    border-radius: 0.25rem;
  }
  .bd-payments-scope .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .bd-payments-scope .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .bd-payments-scope .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .bd-payments-scope .rounded-md {
    border-radius: var(--radius-md);
  }
  .bd-payments-scope .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .bd-payments-scope .rounded-s {
    border-start-start-radius: 0.25rem;
    border-end-start-radius: 0.25rem;
  }
  .bd-payments-scope .rounded-ss {
    border-start-start-radius: 0.25rem;
  }
  .bd-payments-scope .rounded-e {
    border-start-end-radius: 0.25rem;
    border-end-end-radius: 0.25rem;
  }
  .bd-payments-scope .rounded-se {
    border-start-end-radius: 0.25rem;
  }
  .bd-payments-scope .rounded-ee {
    border-end-end-radius: 0.25rem;
  }
  .bd-payments-scope .rounded-es {
    border-end-start-radius: 0.25rem;
  }
  .bd-payments-scope .rounded-t {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .bd-payments-scope .rounded-l {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .bd-payments-scope .rounded-tl {
    border-top-left-radius: 0.25rem;
  }
  .bd-payments-scope .rounded-r {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  .bd-payments-scope .rounded-tr {
    border-top-right-radius: 0.25rem;
  }
  .bd-payments-scope .rounded-b {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .bd-payments-scope .rounded-br {
    border-bottom-right-radius: 0.25rem;
  }
  .bd-payments-scope .rounded-bl {
    border-bottom-left-radius: 0.25rem;
  }
  .bd-payments-scope .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .bd-payments-scope .border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
  }
  .bd-payments-scope .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .bd-payments-scope .border-x {
    border-inline-style: var(--tw-border-style);
    border-inline-width: 1px;
  }
  .bd-payments-scope .border-y {
    border-block-style: var(--tw-border-style);
    border-block-width: 1px;
  }
  .bd-payments-scope .border-s {
    border-inline-start-style: var(--tw-border-style);
    border-inline-start-width: 1px;
  }
  .bd-payments-scope .border-e {
    border-inline-end-style: var(--tw-border-style);
    border-inline-end-width: 1px;
  }
  .bd-payments-scope .border-bs {
    border-block-start-style: var(--tw-border-style);
    border-block-start-width: 1px;
  }
  .bd-payments-scope .border-be {
    border-block-end-style: var(--tw-border-style);
    border-block-end-width: 1px;
  }
  .bd-payments-scope .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .bd-payments-scope .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .bd-payments-scope .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .bd-payments-scope .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .bd-payments-scope .border-\\(--bdp-border\\) {
    border-color: var(--bdp-border);
  }
  .bd-payments-scope .border-\\(--bdp-primary\\)\\/20 {
    border-color: var(--bdp-primary);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--bdp-primary) 20%, transparent);
    }
  }
  .bd-payments-scope .border-\\(--bdp-primary\\)\\/40 {
    border-color: var(--bdp-primary);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--bdp-primary) 40%, transparent);
    }
  }
  .bd-payments-scope .border-amber-500 {
    border-color: var(--color-amber-500);
  }
  .bd-payments-scope .bg-\\(--bdp-bg\\) {
    background-color: var(--bdp-bg);
  }
  .bd-payments-scope .bg-\\(--bdp-muted\\) {
    background-color: var(--bdp-muted);
  }
  .bd-payments-scope .bg-\\(--bdp-primary\\) {
    background-color: var(--bdp-primary);
  }
  .bd-payments-scope .bg-\\(--bdp-primary\\)\\/5 {
    background-color: var(--bdp-primary);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--bdp-primary) 5%, transparent);
    }
  }
  .bd-payments-scope .bg-\\(--bdp-primary\\)\\/10 {
    background-color: var(--bdp-primary);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--bdp-primary) 10%, transparent);
    }
  }
  .bd-payments-scope .bg-amber-500 {
    background-color: var(--color-amber-500);
  }
  .bd-payments-scope .bg-black {
    background-color: var(--color-black);
  }
  .bd-payments-scope .bg-slate-900 {
    background-color: var(--color-slate-900);
  }
  .bd-payments-scope .bg-transparent {
    background-color: transparent;
  }
  .bd-payments-scope .bg-white {
    background-color: var(--color-white);
  }
  .bd-payments-scope .bg-white\\/10 {
    background-color: color-mix(in srgb, #fff 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
    }
  }
  .bd-payments-scope .bg-white\\/20 {
    background-color: color-mix(in srgb, #fff 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 20%, transparent);
    }
  }
  .bd-payments-scope .bg-repeat {
    background-repeat: repeat;
  }
  .bd-payments-scope .mask-no-clip {
    mask-clip: no-clip;
  }
  .bd-payments-scope .mask-repeat {
    mask-repeat: repeat;
  }
  .bd-payments-scope .object-contain {
    object-fit: contain;
  }
  .bd-payments-scope .object-cover {
    object-fit: cover;
  }
  .bd-payments-scope .p-0 {
    padding: 0px;
  }
  .bd-payments-scope .p-1 {
    padding: var(--spacing);
  }
  .bd-payments-scope .p-1\\.5 {
    padding: calc(var(--spacing) * 1.5);
  }
  .bd-payments-scope .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .bd-payments-scope .p-3\\.5 {
    padding: calc(var(--spacing) * 3.5);
  }
  .bd-payments-scope .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .bd-payments-scope .px-0 {
    padding-inline: 0px;
  }
  .bd-payments-scope .px-0\\.5 {
    padding-inline: calc(var(--spacing) * 0.5);
  }
  .bd-payments-scope .px-1 {
    padding-inline: var(--spacing);
  }
  .bd-payments-scope .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .bd-payments-scope .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .bd-payments-scope .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .bd-payments-scope .px-3\\.5 {
    padding-inline: calc(var(--spacing) * 3.5);
  }
  .bd-payments-scope .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .bd-payments-scope .px-5 {
    padding-inline: calc(var(--spacing) * 5);
  }
  .bd-payments-scope .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .bd-payments-scope .py-1 {
    padding-block: var(--spacing);
  }
  .bd-payments-scope .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .bd-payments-scope .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .bd-payments-scope .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .bd-payments-scope .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .bd-payments-scope .py-3\\.5 {
    padding-block: calc(var(--spacing) * 3.5);
  }
  .bd-payments-scope .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .bd-payments-scope .py-6 {
    padding-block: calc(var(--spacing) * 6);
  }
  .bd-payments-scope .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .bd-payments-scope .pt-9 {
    padding-top: calc(var(--spacing) * 9);
  }
  .bd-payments-scope .pt-10 {
    padding-top: calc(var(--spacing) * 10);
  }
  .bd-payments-scope .pr-10 {
    padding-right: calc(var(--spacing) * 10);
  }
  .bd-payments-scope .pb-4 {
    padding-bottom: calc(var(--spacing) * 4);
  }
  .bd-payments-scope .pb-5 {
    padding-bottom: calc(var(--spacing) * 5);
  }
  .bd-payments-scope .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .bd-payments-scope .pl-3\\.5 {
    padding-left: calc(var(--spacing) * 3.5);
  }
  .bd-payments-scope .text-center {
    text-align: center;
  }
  .bd-payments-scope .text-left {
    text-align: left;
  }
  .bd-payments-scope .text-right {
    text-align: right;
  }
  .bd-payments-scope .font-mono {
    font-family: var(--font-mono);
  }
  .bd-payments-scope .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .bd-payments-scope .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .bd-payments-scope .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .bd-payments-scope .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .bd-payments-scope .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .bd-payments-scope .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .bd-payments-scope .text-\\[10px\\] {
    font-size: 10px;
  }
  .bd-payments-scope .text-\\[11px\\] {
    font-size: 11px;
  }
  .bd-payments-scope .text-\\[13px\\] {
    font-size: 13px;
  }
  .bd-payments-scope .text-\\[14px\\] {
    font-size: 14px;
  }
  .bd-payments-scope .text-\\[22px\\] {
    font-size: 22px;
  }
  .bd-payments-scope .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .bd-payments-scope .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .bd-payments-scope .leading-snug {
    --tw-leading: var(--leading-snug);
    line-height: var(--leading-snug);
  }
  .bd-payments-scope .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .bd-payments-scope .font-extrabold {
    --tw-font-weight: var(--font-weight-extrabold);
    font-weight: var(--font-weight-extrabold);
  }
  .bd-payments-scope .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .bd-payments-scope .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .bd-payments-scope .tracking-tight {
    --tw-tracking: var(--tracking-tight);
    letter-spacing: var(--tracking-tight);
  }
  .bd-payments-scope .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .bd-payments-scope .tracking-wider {
    --tw-tracking: var(--tracking-wider);
    letter-spacing: var(--tracking-wider);
  }
  .bd-payments-scope .tracking-widest {
    --tw-tracking: var(--tracking-widest);
    letter-spacing: var(--tracking-widest);
  }
  .bd-payments-scope .text-wrap {
    text-wrap: wrap;
  }
  .bd-payments-scope .text-clip {
    text-overflow: clip;
  }
  .bd-payments-scope .text-ellipsis {
    text-overflow: ellipsis;
  }
  .bd-payments-scope .whitespace-nowrap {
    white-space: nowrap;
  }
  .bd-payments-scope .text-\\(--bdp-destructive\\) {
    color: var(--bdp-destructive);
  }
  .bd-payments-scope .text-\\(--bdp-fg\\) {
    color: var(--bdp-fg);
  }
  .bd-payments-scope .text-\\(--bdp-muted-fg\\) {
    color: var(--bdp-muted-fg);
  }
  .bd-payments-scope .text-\\(--bdp-primary\\) {
    color: var(--bdp-primary);
  }
  .bd-payments-scope .text-\\(--bdp-primary-fg\\) {
    color: var(--bdp-primary-fg);
  }
  .bd-payments-scope .text-amber-700 {
    color: var(--color-amber-700);
  }
  .bd-payments-scope .text-emerald-600 {
    color: var(--color-emerald-600);
  }
  .bd-payments-scope .text-white {
    color: var(--color-white);
  }
  .bd-payments-scope .text-white\\/80 {
    color: color-mix(in srgb, #fff 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 80%, transparent);
    }
  }
  .bd-payments-scope .capitalize {
    text-transform: capitalize;
  }
  .bd-payments-scope .lowercase {
    text-transform: lowercase;
  }
  .bd-payments-scope .normal-case {
    text-transform: none;
  }
  .bd-payments-scope .uppercase {
    text-transform: uppercase;
  }
  .bd-payments-scope .italic {
    font-style: italic;
  }
  .bd-payments-scope .not-italic {
    font-style: normal;
  }
  .bd-payments-scope .diagonal-fractions {
    --tw-numeric-fraction: diagonal-fractions;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .bd-payments-scope .lining-nums {
    --tw-numeric-figure: lining-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .bd-payments-scope .oldstyle-nums {
    --tw-numeric-figure: oldstyle-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .bd-payments-scope .ordinal {
    --tw-ordinal: ordinal;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .bd-payments-scope .proportional-nums {
    --tw-numeric-spacing: proportional-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .bd-payments-scope .slashed-zero {
    --tw-slashed-zero: slashed-zero;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .bd-payments-scope .stacked-fractions {
    --tw-numeric-fraction: stacked-fractions;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .bd-payments-scope .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .bd-payments-scope .normal-nums {
    font-variant-numeric: normal;
  }
  .bd-payments-scope .line-through {
    text-decoration-line: line-through;
  }
  .bd-payments-scope .no-underline {
    text-decoration-line: none;
  }
  .bd-payments-scope .overline {
    text-decoration-line: overline;
  }
  .bd-payments-scope .underline {
    text-decoration-line: underline;
  }
  .bd-payments-scope .antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .bd-payments-scope .subpixel-antialiased {
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
  }
  .bd-payments-scope .opacity-40 {
    opacity: 40%;
  }
  .bd-payments-scope .opacity-70 {
    opacity: 70%;
  }
  .bd-payments-scope .opacity-85 {
    opacity: 85%;
  }
  .bd-payments-scope .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .bd-payments-scope .shadow-2xl {
    --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, rgb(0 0 0 / 0.25));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .bd-payments-scope .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .bd-payments-scope .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .bd-payments-scope .shadow-xs {
    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .bd-payments-scope .ring {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .bd-payments-scope .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .bd-payments-scope .ring-2 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .bd-payments-scope .ring-4 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .bd-payments-scope .inset-ring {
    --tw-inset-ring-shadow: inset 0 0 0 1px var(--tw-inset-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .bd-payments-scope .ring-\\(--bdp-primary\\)\\/20 {
    --tw-ring-color: var(--bdp-primary);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--bdp-primary) 20%, transparent);
    }
  }
  .bd-payments-scope .ring-black {
    --tw-ring-color: var(--color-black);
  }
  .bd-payments-scope .ring-black\\/5 {
    --tw-ring-color: color-mix(in srgb, #000 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-black) 5%, transparent);
    }
  }
  .bd-payments-scope .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .bd-payments-scope .blur {
    --tw-blur: blur(8px);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .bd-payments-scope .drop-shadow {
    --tw-drop-shadow-size: drop-shadow(0 1px 2px var(--tw-drop-shadow-color, rgb(0 0 0 / 0.1))) drop-shadow(0 1px 1px var(--tw-drop-shadow-color, rgb(0 0 0 / 0.06)));
    --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow( 0 1px 1px rgb(0 0 0 / 0.06));
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .bd-payments-scope .grayscale {
    --tw-grayscale: grayscale(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .bd-payments-scope .invert {
    --tw-invert: invert(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .bd-payments-scope .sepia {
    --tw-sepia: sepia(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .bd-payments-scope .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .bd-payments-scope .backdrop-blur {
    --tw-backdrop-blur: blur(8px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .bd-payments-scope .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .bd-payments-scope .backdrop-grayscale {
    --tw-backdrop-grayscale: grayscale(100%);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .bd-payments-scope .backdrop-invert {
    --tw-backdrop-invert: invert(100%);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .bd-payments-scope .backdrop-sepia {
    --tw-backdrop-sepia: sepia(100%);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .bd-payments-scope .backdrop-filter {
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .bd-payments-scope .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .bd-payments-scope .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .bd-payments-scope .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .bd-payments-scope .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .bd-payments-scope .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
  .bd-payments-scope .select-none {
    -webkit-user-select: none;
    user-select: none;
  }
  .bd-payments-scope :where(.divide-x-reverse > :not(:last-child)) {
    --tw-divide-x-reverse: 1;
  }
  .bd-payments-scope .ring-inset {
    --tw-ring-inset: inset;
  }
  @media (hover: hover) {
    .bd-payments-scope .group-hover\\:translate-x-0\\.5:is(:where(.group):hover *) {
      --tw-translate-x: calc(var(--spacing) * 0.5);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .bd-payments-scope .placeholder\\:text-\\(--bdp-muted-fg\\)::placeholder {
    color: var(--bdp-muted-fg);
  }
  @media (hover: hover) {
    .bd-payments-scope .hover\\:border-\\(--bdp-primary\\):hover {
      border-color: var(--bdp-primary);
    }
    .bd-payments-scope .hover\\:bg-\\(--bdp-muted\\):hover {
      background-color: var(--bdp-muted);
    }
    .bd-payments-scope .hover\\:bg-\\(--bdp-primary\\)\\/10:hover {
      background-color: var(--bdp-primary);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .bd-payments-scope .hover\\:bg-\\(--bdp-primary\\)\\/10:hover {
        background-color: color-mix(in oklab, var(--bdp-primary) 10%, transparent);
      }
    }
    .bd-payments-scope .hover\\:bg-white\\/30:hover {
      background-color: color-mix(in srgb, #fff 30%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .bd-payments-scope .hover\\:bg-white\\/30:hover {
        background-color: color-mix(in oklab, var(--color-white) 30%, transparent);
      }
    }
    .bd-payments-scope .hover\\:text-\\(--bdp-fg\\):hover {
      color: var(--bdp-fg);
    }
    .bd-payments-scope .hover\\:opacity-80:hover {
      opacity: 80%;
    }
    .bd-payments-scope .hover\\:opacity-90:hover {
      opacity: 90%;
    }
  }
  .bd-payments-scope .focus\\:outline-none:focus {
    --tw-outline-style: none;
    outline-style: none;
  }
  .bd-payments-scope .focus-visible\\:border-\\(--bdp-primary\\):focus-visible {
    border-color: var(--bdp-primary);
  }
  .bd-payments-scope .focus-visible\\:ring-2:focus-visible {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .bd-payments-scope .focus-visible\\:ring-\\(--bdp-primary\\)\\/50:focus-visible {
    --tw-ring-color: var(--bdp-primary);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--bdp-primary) 50%, transparent);
    }
  }
  .bd-payments-scope .active\\:scale-95:active {
    --tw-scale-x: 95%;
    --tw-scale-y: 95%;
    --tw-scale-z: 95%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .bd-payments-scope .disabled\\:pointer-events-none:disabled {
    pointer-events: none;
  }
  .bd-payments-scope .disabled\\:opacity-50:disabled {
    opacity: 50%;
  }
  @media (width >= 48rem) {
    .bd-payments-scope .md\\:text-sm {
      font-size: var(--text-sm);
      line-height: var(--tw-leading, var(--text-sm--line-height));
    }
  }
}
@layer components {
  .bd-payments-scope {
    font-family: inherit;
    --bdp-bg: #ffffff;
    --bdp-fg: #09090b;
    --bdp-muted: #f4f4f5;
    --bdp-muted-fg: #71717a;
    --bdp-border: #e4e4e7;
    --bdp-primary: #4f46e5;
    --bdp-primary-fg: #ffffff;
    --bdp-destructive: #dc2626;
    --bdp-radius: 0.75rem;
    --bdp-warning-bg: rgba(245, 158, 11, 0.10);
    --bdp-warning-border: rgba(245, 158, 11, 0.25);
    --bdp-warning-fg: #92400e;
    --bdp-warning-title: #b45309;
    color-scheme: light;
  }
  :is(.dark .bd-payments-scope) {
    --bdp-bg: #18181b;
    --bdp-fg: #fafafa;
    --bdp-muted: #27272a;
    --bdp-muted-fg: #a1a1aa;
    --bdp-border: #3f3f46;
    --bdp-primary: #6366f1;
    --bdp-primary-fg: #ffffff;
    --bdp-destructive: #f87171;
    --bdp-warning-bg: rgba(245, 158, 11, 0.15);
    --bdp-warning-border: rgba(245, 158, 11, 0.35);
    --bdp-warning-fg: #fbbf24;
    --bdp-warning-title: #f59e0b;
    color-scheme: dark;
  }
  .bd-payments-scope.bdp-overlay {
    position: fixed;
    inset: 0;
    z-index: 9998;
    background: rgba(0, 0, 0, 0.4);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    animation: bdp-fade-in 120ms ease-out;
  }
  .bd-payments-scope.bdp-content {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    display: grid;
    width: 100%;
    max-width: calc(100% - 2rem);
    max-height: calc(100dvh - 2rem);
    overflow-y: auto;
    border-radius: 1rem;
    border: 1px solid var(--bdp-border);
    background: var(--bdp-bg);
    color: var(--bdp-fg);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    animation: bdp-pop-in 140ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  @media (min-width: 40rem) {
    .bd-payments-scope.bdp-content {
      max-width: 27.5rem;
    }
  }
  @keyframes bdp-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes bdp-pop-in {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-pan-x {
  syntax: "*";
  inherits: false;
}
@property --tw-pan-y {
  syntax: "*";
  inherits: false;
}
@property --tw-pinch-zoom {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-space-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    .bd-payments-scope *, .bd-payments-scope ::before, .bd-payments-scope ::after, .bd-payments-scope ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-pan-x: initial;
      --tw-pan-y: initial;
      --tw-pinch-zoom: initial;
      --tw-space-y-reverse: 0;
      --tw-space-x-reverse: 0;
      --tw-divide-x-reverse: 0;
      --tw-border-style: solid;
      --tw-divide-y-reverse: 0;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
    }
  }
}
`;

// src/components/BdPaymentProvider.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var BdPaymentContext = (0, import_react6.createContext)({});
function useBdPaymentConfig() {
  return (0, import_react6.useContext)(BdPaymentContext);
}
function BdPaymentProvider({
  children,
  config
}) {
  const themeCss = (0, import_react6.useMemo)(
    () => buildThemeCss(config?.theme, config?.colorScheme),
    [config?.theme, config?.colorScheme]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(BdPaymentContext.Provider, { value: config ?? {}, children: [
    cssString && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("style", { dangerouslySetInnerHTML: { __html: cssString } }),
    themeCss && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("style", { dangerouslySetInnerHTML: { __html: themeCss } }),
    children
  ] });
}

// src/hooks/usePaymentDialog.ts
var import_react7 = require("react");
function usePaymentDialog(options = {}) {
  const { onConfirm, keepOpenOnConfirm } = options;
  const [isOpen, setIsOpen] = (0, import_react7.useState)(false);
  const [placing, setPlacing] = (0, import_react7.useState)(false);
  const [result, setResult] = (0, import_react7.useState)(null);
  const open = (0, import_react7.useCallback)(() => setIsOpen(true), []);
  const close = (0, import_react7.useCallback)(() => setIsOpen(false), []);
  const handleConfirm = (0, import_react7.useCallback)(
    async (r2) => {
      setResult(r2);
      const ret = onConfirm?.(r2);
      if (ret && typeof ret.then === "function") {
        try {
          setPlacing(true);
          await ret;
          if (!keepOpenOnConfirm) setIsOpen(false);
        } finally {
          setPlacing(false);
        }
      } else if (!keepOpenOnConfirm) {
        setIsOpen(false);
      }
    },
    [onConfirm, keepOpenOnConfirm]
  );
  return {
    /** Whether the dialog is open. */
    isOpen,
    /** Open the dialog. */
    open,
    /** Close the dialog. */
    close,
    /** Directly control open state. */
    setOpen: setIsOpen,
    /** True while an async confirm is in flight. */
    placing,
    /** The most recent confirmed result. */
    result,
    /** Spread onto <PaymentDialog />. */
    dialogProps: {
      open: isOpen,
      onOpenChange: setIsOpen,
      placing,
      onConfirm: handleConfirm
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BdPaymentProvider,
  PAYMENT_BRANDS,
  PAYMENT_METHOD_LABELS,
  PaymentBrandMark,
  PaymentDialog,
  extractTrxId,
  isValidTrxId,
  parseTrxIdConstraints,
  renderInstructions,
  resolveBrands,
  sanitiseTrxId,
  useBdPaymentConfig,
  usePaymentDialog
});
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-left.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-right.js:
lucide-react/dist/esm/icons/circle-check.js:
lucide-react/dist/esm/icons/clipboard-paste.js:
lucide-react/dist/esm/icons/clock.js:
lucide-react/dist/esm/icons/copy.js:
lucide-react/dist/esm/icons/credit-card.js:
lucide-react/dist/esm/icons/loader-circle.js:
lucide-react/dist/esm/icons/shield-check.js:
lucide-react/dist/esm/icons/sparkles.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.475.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
