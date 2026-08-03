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
  `<g transform="translate(35, 37) scale(0.42)" fill="none"><path fill="#D12053" d="M96.58 62.45l-53.03-8.31 7.03 31.6z"/><path fill="#E2136E" d="M96.58 62.45L56.62 6.93 43.56 54.15z"/><path fill="#D12053" d="M42.32 53.51L.45 0l54.83 6.55z"/><path fill="#9E1638" d="M23.25 31.15L0 9.24h6.12z"/><path fill="#D12053" d="M107.89 35.46l-9.84 26.69L82.1 40.09z"/><path fill="#E2136E" d="M56.77 84.14l38.61-15.51L97 63.7z"/><path fill="#9E1638" d="M25.89 113.41l16.54-58.02 8.39 37.75z"/><path fill="#E2136E" d="M109.43 35.67l-4.06 11.02 14.64-.24z"/></g>`,
  "#FFFFFF"
);
var NAGAD_ICON = svg(
  `<g transform="translate(19, 20) scale(0.20)"><path d="M373.408 213.294C373.408 218.28 373.408 223.821 372.854 228.807C371.192 250.968 365.652 271.466 356.788 290.857C353.464 298.613 349.032 305.815 344.599 313.018C311.358 365.65 253.186 399.999 186.704 399.999C158.449 399.999 131.302 393.35 106.926 382.27C43.7674 352.353 0 287.533 0 213.294C0 139.61 42.1054 76.4515 103.601 45.9805C98.6153 52.0747 94.1831 59.2769 90.305 65.9252C89.751 66.4792 89.751 67.0332 89.197 67.5872C86.9809 69.8033 84.2108 71.4653 81.9947 73.6814L73.6844 81.9917L72.0224 83.6538C71.4684 84.2078 70.9144 84.7618 70.3603 85.8698C69.2523 86.9779 68.1443 88.0859 67.5902 89.194C65.9282 91.41 63.7121 93.6261 62.0501 96.3962C54.2938 106.369 47.6456 118.003 42.6594 129.637L40.9974 132.961C40.4433 134.624 39.8893 135.732 39.3353 137.394C39.3353 137.948 38.7813 139.056 38.7813 139.61C38.2273 141.826 37.1192 144.042 36.5652 146.258C36.0112 147.92 35.4572 149.028 35.4572 150.69C35.4572 151.244 34.9032 152.352 34.9032 152.906C34.3491 154.568 34.3491 155.676 33.7951 157.338C32.6871 161.77 31.579 166.757 31.025 171.743C31.025 172.851 30.471 173.959 30.471 175.621C30.471 176.729 30.471 177.283 29.917 178.391C29.917 180.053 29.917 181.161 29.363 182.823V195.012C29.363 245.981 52.6317 291.411 89.197 321.328C117.452 344.597 153.463 358.447 192.244 358.447C227.702 358.447 260.943 346.813 287.536 327.422C306.926 313.018 323.547 294.735 335.181 273.682C336.843 270.912 337.951 268.142 339.613 265.372C349.032 245.981 354.572 223.821 355.126 201.106V195.566C355.126 190.025 355.126 185.039 354.572 180.053C355.126 180.053 355.126 180.607 355.126 180.607C357.896 182.823 360.112 185.039 362.328 187.255C364.544 183.377 366.76 179.499 369.53 176.175C371.192 183.377 372.3 190.579 372.854 197.782C373.408 202.214 373.408 207.754 373.408 213.294Z" fill="#EA2227"/><path d="M355.126 194.459V199.999C355.126 233.24 341.276 260.941 339.614 264.265C338.506 267.035 336.843 269.805 335.181 272.576C323.547 293.628 306.927 312.465 287.536 326.315C260.943 345.706 227.702 357.34 192.245 357.34C152.909 357.34 116.898 343.49 89.1973 320.221C52.6321 290.304 29.3633 244.875 29.3633 193.905V181.716C29.3633 180.054 29.3633 178.946 29.9173 177.284C29.9173 176.176 29.9173 175.622 30.4713 174.514C30.4713 173.406 31.0253 172.298 31.0253 170.636C31.5794 165.65 32.6874 161.218 33.7954 156.232C34.3495 154.57 34.3494 153.461 34.9035 151.799C34.9035 151.245 35.4575 150.137 35.4575 149.583C36.0115 147.921 36.0115 146.813 36.5655 145.151C37.1195 142.935 38.2276 140.719 38.7816 138.503C38.7816 137.949 39.3356 136.841 39.3356 136.287C39.8896 134.625 40.4437 133.517 40.9977 131.855L42.6597 128.531C47.6459 116.896 54.2941 105.262 62.0504 95.2895C63.7124 93.0734 65.9285 90.8573 67.5906 88.0872C68.6986 86.9792 69.2526 85.8711 70.3607 84.7631C70.9147 84.2091 71.4687 83.6551 72.0227 82.547L73.6848 80.885L81.995 72.5747C84.2111 70.3586 86.9812 68.1425 89.1973 66.4805C88.6433 67.0345 88.6433 67.5885 88.0892 68.1425C87.5352 68.6965 87.5352 69.2506 86.9812 70.3586C77.5629 89.7493 71.4687 111.91 69.2526 136.287C68.6986 142.935 68.1446 149.583 68.1446 156.232C68.1446 241.551 118.006 310.803 180.056 310.803H186.15C195.015 310.803 203.879 309.695 212.189 307.479C254.295 295.844 284.766 257.617 284.766 212.187V209.417C284.212 182.27 272.577 158.448 254.295 140.719C267.037 141.273 279.226 142.935 291.414 145.705C314.129 151.799 335.181 162.326 352.91 176.73C353.464 176.73 353.464 177.284 354.018 177.284C354.572 183.933 355.126 188.919 355.126 194.459Z" fill="#F69220"/><path d="M355.681 194.459V199.999C355.681 234.902 340.168 264.819 340.168 264.819C339.06 267.589 337.398 270.359 335.736 273.13C324.102 294.182 307.481 313.019 287.537 327.423C259.282 347.368 226.594 358.449 191.691 358.449C154.018 358.449 116.899 345.152 88.0898 321.329C49.8626 290.304 28.2559 243.767 28.2559 194.459C28.2559 145.151 50.4166 98.6136 88.6439 67.5885L90.3059 66.4805C89.7519 67.0345 89.7519 67.5885 89.1979 68.1425C88.6439 68.6965 88.6439 69.2506 88.0898 69.8046C50.9706 100.83 29.3639 146.259 29.3639 194.459C29.3639 243.213 50.9706 289.196 88.6439 320.221C117.453 344.044 154.018 356.786 191.691 356.786C226.04 356.786 258.728 346.26 286.428 326.315C305.819 312.465 322.44 293.628 334.074 272.576C335.736 269.805 336.844 267.035 338.506 264.265C338.506 263.711 354.019 234.348 354.019 199.999V194.459C354.019 189.473 354.019 183.933 353.465 178.946V178.392C354.019 178.392 354.019 178.946 354.573 178.946L355.127 179.5C355.681 184.487 355.681 189.473 355.681 194.459Z" fill="#F69220"/><path d="M311.358 93.0762C311.358 93.0762 178.393 68.1453 115.789 183.935C115.789 183.935 126.869 103.603 222.161 67.5913L203.324 32.1341C203.324 32.1341 241.551 -2.2151 308.587 6.64921L311.358 93.0762Z" fill="#EA2227"/><path d="M146.262 154.573C146.262 154.573 199.447 85.3207 320.778 103.049L319.115 62.606C319.115 62.606 370.085 60.9439 411.082 96.4011L360.667 172.856C360.667 172.856 325.764 132.412 253.741 131.304C224.378 130.75 188.367 134.628 146.262 154.573Z" fill="#F69220"/><path d="M93.6296 217.729C93.6296 217.729 32.6876 85.3189 173.962 0L207.757 62.0501C207.757 62.0501 185.043 69.8064 160.666 90.8591C134.073 113.574 105.264 152.355 93.6296 217.729Z" fill="#F69220"/><path d="M173.963 181.714C173.963 181.714 162.328 184.484 162.882 178.39C162.882 176.174 163.99 175.62 165.099 176.174C165.099 175.066 162.882 172.296 167.869 170.634C169.531 168.418 171.193 166.202 171.747 165.094C172.301 163.432 173.409 161.769 177.841 162.324C182.273 163.432 187.259 167.864 187.813 168.972C190.583 168.972 193.353 169.526 192.245 170.08C191.137 170.634 190.583 171.742 191.137 171.742C191.137 171.742 192.799 172.85 188.367 172.85C188.367 173.958 189.475 173.958 190.029 174.512C190.583 175.066 190.029 175.62 190.029 175.62C190.029 175.62 190.583 177.836 188.367 177.282C186.151 176.174 186.151 175.62 185.043 175.62C184.489 175.62 182.827 176.174 182.827 176.728C182.827 177.282 185.597 178.944 182.273 179.498C181.719 180.052 183.381 180.606 182.273 181.16C181.165 181.714 176.179 185.592 173.963 186.146C171.747 186.146 171.193 185.592 171.193 184.484C171.193 183.376 172.301 182.822 173.963 182.822C174.517 182.268 174.517 181.714 173.963 181.714Z" fill="#EC1C24"/><path d="M172.852 193.907C171.744 193.907 168.42 191.691 170.082 190.583C171.744 189.475 179.5 184.488 181.162 183.934C182.824 183.38 185.04 185.596 182.824 187.259C181.162 188.921 172.852 193.907 172.852 193.907Z" fill="#EC1C24"/><path d="M185.041 188.363C185.041 187.255 186.149 182.269 186.149 181.161C186.149 180.053 190.027 180.053 188.919 183.931C188.365 188.363 185.041 189.471 185.041 188.363Z" fill="#EC1C24"/><path d="M190.026 179.5C190.026 179.5 211.079 178.392 212.741 179.5C214.403 180.608 221.606 191.689 219.943 201.661C218.281 211.633 214.957 214.403 201.661 215.512C201.661 212.187 201.107 203.877 199.445 201.661C198.337 199.445 193.351 194.459 191.134 194.459C191.134 196.675 190.58 203.877 190.58 203.877C190.58 203.877 183.932 204.431 182.824 202.769V192.243C182.824 192.243 188.918 186.703 189.472 185.594C190.58 186.149 190.58 189.473 198.337 188.919C198.891 187.811 190.026 188.919 190.026 179.5Z" fill="#EC1C24"/><path d="M182.271 188.922C182.271 188.922 175.623 194.462 173.961 195.57C173.407 197.232 172.299 203.326 181.163 203.326C181.717 199.448 182.271 188.922 182.271 188.922Z" fill="#EC1C24"/><path d="M166.207 197.232C163.991 197.232 162.329 196.678 162.883 195.015C162.883 193.353 166.207 191.691 167.869 192.245C169.531 192.799 172.855 193.353 172.855 200.556C173.963 202.218 178.395 204.988 183.381 205.542C188.368 206.096 191.692 204.988 191.692 206.65V216.622C191.692 216.622 185.598 216.622 170.085 205.542C168.977 203.88 167.869 202.772 167.869 200.002C167.869 198.894 166.761 197.232 166.207 197.232Z" fill="#EC1C24"/><path d="M161.22 198.34C158.45 198.34 151.247 204.434 156.788 207.204C158.45 206.096 159.558 204.434 159.558 204.434C159.558 204.434 158.45 207.758 161.22 208.866C163.99 209.974 162.882 207.204 164.544 207.204C165.652 208.866 165.652 209.42 167.314 209.42C168.976 209.42 168.976 204.988 167.314 202.772C165.652 200.002 163.99 198.894 161.22 198.34Z" fill="#EC1C24"/><path d="M192.799 199.441V218.832C192.799 218.832 199.447 216.616 200.001 214.954C200.001 211.63 198.893 199.441 192.799 199.441Z" fill="#EC1C24"/><path d="M177.285 212.188C177.285 212.188 185.041 217.174 189.474 219.39C188.92 220.498 185.595 224.376 184.487 224.376C183.379 223.822 177.839 216.066 177.285 212.188Z" fill="#EC1C24"/><path d="M140.166 219.391H150.138V223.269H140.72L140.166 219.391Z" fill="#EC1C24"/><path d="M253.742 217.73H209.975L217.177 223.271H253.742V217.73Z" fill="#EC1C24"/><path d="M201.664 217.175C202.218 216.621 207.205 220.499 206.097 221.053C204.435 221.607 191.138 227.701 190.03 227.147C188.922 226.593 188.922 223.269 190.584 222.715C191.692 222.161 199.448 219.945 201.664 217.175Z" fill="#EC1C24"/><path d="M186.704 226.588C185.042 225.48 176.178 234.344 180.056 234.898C183.934 235.452 193.353 237.114 195.569 238.222C197.785 237.114 200.001 235.452 199.447 234.344C201.109 234.344 203.325 236.56 205.541 236.006C207.757 234.898 218.284 227.142 218.838 226.034C216.621 224.372 212.189 221.602 209.973 221.602C208.311 221.602 193.907 229.912 186.704 226.588Z" fill="#EC1C24"/><path d="M182.273 237.118C183.381 237.118 194.461 241.55 197.231 240.996C200.001 240.442 200.555 237.672 202.217 237.672C203.879 237.672 204.433 239.334 207.203 237.672C209.974 236.01 214.406 232.131 215.514 231.023C215.514 232.685 215.514 237.672 205.541 242.104C195.569 246.536 171.746 253.184 171.192 256.508C172.3 257.062 175.07 255.954 177.286 254.846C178.394 255.954 180.611 258.724 180.057 264.265C179.503 269.251 175.624 278.115 175.624 280.331V294.736C175.624 295.844 177.84 301.938 174.516 301.384C171.746 300.83 169.53 300.83 168.422 300.83C167.314 300.83 165.098 303.046 162.882 302.492C160.666 301.938 157.342 301.384 157.342 300.276C157.342 299.168 159.558 299.168 161.774 298.614C163.99 298.06 165.098 295.844 168.976 294.182C168.976 291.411 167.868 272.575 167.868 268.697C167.868 264.819 166.76 256.508 168.422 253.184C168.976 249.86 177.84 237.118 182.273 237.118Z" fill="#EC1C24"/><path d="M196.676 248.753C196.676 249.861 203.324 267.036 206.648 267.59C209.418 268.144 237.673 262.049 243.213 263.712C244.875 265.928 248.199 269.806 248.199 272.576C248.199 272.576 248.754 278.116 248.199 278.67C249.308 278.67 251.524 278.116 252.078 276.454C252.632 274.792 252.078 267.59 252.632 265.928C252.632 264.82 255.956 257.617 251.524 258.171C247.091 258.171 233.795 258.171 229.363 257.063C224.931 255.955 215.512 254.293 213.296 255.401C211.08 256.509 208.31 260.387 208.31 261.495C207.202 261.495 207.202 260.941 207.756 257.617C208.864 254.847 212.188 245.983 211.634 241.551C208.31 241.551 196.676 248.753 196.676 248.753Z" fill="#EC1C24"/><path d="M180.611 221.608C181.165 222.162 181.165 223.824 182.273 224.378L159.558 222.716C159.558 222.716 156.788 221.054 157.896 220.5L180.611 221.608Z" fill="#EC1C24"/><path d="M155.678 219.389H178.393C178.393 219.389 176.731 216.619 176.177 214.957C172.298 214.957 155.124 215.511 155.124 215.511C155.124 215.511 152.908 215.511 152.908 219.943C152.354 221.051 154.57 222.713 155.678 219.389Z" fill="#EC1C24"/><path d="M134.072 223.267H138.504C138.504 223.267 140.166 222.713 138.504 221.05C136.842 219.388 134.072 218.28 136.288 214.956C134.072 214.402 130.748 213.848 131.302 221.05H129.086C129.086 221.05 128.532 217.172 122.992 217.172C118.005 217.172 104.709 222.713 104.709 222.713C104.709 222.713 119.113 226.591 122.992 226.591C126.87 226.591 129.086 223.267 129.086 223.267H130.748C130.748 223.267 131.302 226.037 132.41 227.145V231.577C132.41 231.577 130.194 232.131 130.748 234.901C131.302 237.117 132.964 237.117 132.964 237.117C133.518 237.117 134.072 236.563 135.734 236.563C136.842 235.455 136.288 232.685 134.072 231.577V228.253C134.072 228.253 135.734 227.145 135.734 226.037C135.734 224.929 134.072 224.929 134.072 223.267Z" fill="#EC1C24"/><path d="M161.219 245.43C162.881 244.322 163.435 242.106 163.435 242.106V228.81C163.435 225.486 157.895 223.27 157.341 223.27H156.787C156.233 223.824 154.571 224.932 153.463 224.932C151.801 224.932 151.247 224.932 149.585 223.27C145.153 223.27 142.936 228.81 142.382 228.81C142.382 229.918 141.828 239.336 142.382 240.998C142.936 242.66 144.045 243.768 144.599 244.322C143.49 247.646 139.058 265.375 145.153 267.591V270.361H160.665V267.037C166.205 264.821 162.327 249.862 161.219 245.43ZM144.045 228.81C144.599 228.256 146.261 223.824 149.585 223.824C151.247 225.486 152.355 225.486 154.017 225.486C155.679 225.486 156.787 224.378 157.895 223.824C159.557 224.378 162.881 226.04 162.881 228.256V241.552C162.881 242.106 162.327 243.214 161.219 243.768H158.449V238.228H147.923V243.768H145.707C145.153 243.214 144.045 242.106 144.045 240.998C143.491 239.89 143.491 233.242 144.045 228.81ZM154.571 265.375H151.801C151.247 265.375 150.693 264.821 150.693 264.267C150.693 263.713 151.247 263.159 151.801 263.159H154.571C155.125 263.159 155.679 263.713 155.679 264.267C155.679 264.821 155.125 265.375 154.571 265.375ZM160.111 266.483L152.909 258.173L146.261 266.483C141.828 264.821 144.599 250.97 146.261 244.876H160.665C161.773 250.97 164.543 264.267 160.111 266.483Z" fill="#EC1C24"/><path d="M157.897 250.968C159.559 248.752 157.343 247.09 157.343 247.09H148.479C145.708 247.09 146.817 250.968 146.817 250.968L152.357 255.954C152.357 255.954 156.235 253.738 157.897 250.968Z" fill="#EC1C24"/><path d="M154.57 256.508L160.11 263.156C160.11 263.156 159.556 255.4 159.556 253.184C157.894 253.184 154.57 256.508 154.57 256.508Z" fill="#EC1C24"/><path d="M146.261 253.184C146.261 255.954 145.707 263.156 145.707 263.156L151.247 256.508C151.247 256.508 147.923 253.184 146.261 253.184Z" fill="#EC1C24"/><path d="M156.787 236.564H157.895V235.456C157.895 234.902 157.341 234.348 156.787 234.348H148.477C147.923 234.348 147.369 234.902 147.369 235.456V236.564H148.477H156.787Z" fill="#EC1C24"/><path d="M144.598 271.469H143.49V272.577C143.49 273.131 144.044 273.685 144.598 273.685H160.665C161.219 273.685 161.773 273.131 161.773 272.577V271.469H160.665H144.598Z" fill="#EC1C24"/></g>`,
  "#FFFFFF"
);
var ROCKET_ICON = svg(
  `<g transform="translate(19, 22) scale(0.19)"><path d="M431 0C430.073 3.53054 429.027 7.00291 427.88 10.4673C427.633 11.2179 427.633 11.2179 427.381 11.9837C427.028 13.0589 426.674 14.134 426.319 15.2089C425.363 18.1081 424.412 21.0087 423.461 23.9095C423.364 24.2051 423.267 24.5007 423.168 24.8052C421.234 30.7055 419.34 36.6182 417.458 42.5351C414.576 51.5899 411.634 60.6236 408.669 69.6516C406.095 77.4932 403.553 85.3438 401.05 93.2084C398.362 101.653 395.625 110.081 392.86 118.501C389.909 127.49 386.994 136.489 384.123 145.503C381.687 153.152 379.211 160.787 376.713 168.415C374.382 175.538 372.087 182.671 369.813 189.813C366.914 198.917 363.954 208 360.971 217.076C358.053 225.957 355.172 234.848 352.337 243.755C349.894 251.431 347.405 259.091 344.894 266.745C342.218 274.902 339.571 283.067 336.967 291.247C334.085 300.302 331.143 309.336 328.179 318.364C325.45 326.678 322.76 335.003 320.107 343.341C317.357 351.979 314.542 360.594 311.714 369.206C308.351 379.448 305.064 389.713 301.84 400C301.377 400 300.914 400 300.436 400C299.778 399.087 299.16 398.145 298.565 397.19C297.813 396.205 297.055 395.231 296.283 394.262C295.826 393.684 295.369 393.106 294.912 392.528C294.67 392.222 294.429 391.916 294.18 391.601C292.825 389.88 291.484 388.148 290.141 386.417C288.198 383.913 286.251 381.413 284.292 378.923C282.332 376.432 280.385 373.932 278.442 371.429C275.852 368.092 273.251 364.765 270.639 361.445C269.358 359.815 268.078 358.184 266.798 356.553C265.744 355.21 264.689 353.867 263.633 352.525C260.944 349.105 258.269 345.673 255.601 342.236C253.94 340.096 252.273 337.961 250.598 335.831C248.354 332.979 246.127 330.114 243.902 327.247C242.24 325.107 240.573 322.972 238.898 320.843C236.655 317.991 234.428 315.125 232.202 312.258C230.541 310.119 228.874 307.984 227.199 305.855C225.24 303.364 223.293 300.864 221.35 298.361C217.328 293.181 213.281 288.023 209.182 282.904C205.735 289.746 202.361 296.617 199.075 303.539C197.936 305.933 196.788 308.324 195.641 310.714C195.406 311.204 195.171 311.694 194.929 312.198C193.776 314.603 192.621 317.007 191.464 319.411C187.489 327.669 183.591 335.964 179.7 344.262C179.237 344.262 178.774 344.262 178.296 344.262C176.891 332.777 175.487 321.292 174.086 309.806C173.436 304.473 172.785 299.14 172.132 293.807C171.563 289.159 170.995 284.511 170.429 279.862C170.129 277.401 169.829 274.94 169.526 272.479C169.242 270.162 168.959 267.845 168.678 265.528C168.575 264.678 168.471 263.828 168.366 262.978C168.223 261.817 168.082 260.655 167.942 259.493C167.9 259.158 167.858 258.823 167.815 258.478C167.17 253.066 167.17 253.066 168.115 251.485C168.388 251.221 168.661 250.957 168.942 250.684C169.25 250.378 169.558 250.071 169.875 249.756C170.213 249.436 170.55 249.116 170.898 248.787C171.244 248.447 171.589 248.107 171.945 247.757C173.051 246.672 174.167 245.599 175.284 244.526C176.387 243.452 177.488 242.376 178.588 241.3C179.272 240.632 179.958 239.966 180.647 239.302C181.125 238.84 181.125 238.84 181.612 238.369C181.887 238.104 182.162 237.84 182.446 237.567C183.269 236.715 184.029 235.85 184.795 234.949C187.172 232.225 189.745 229.696 192.301 227.144C192.868 226.577 193.434 226.009 194.001 225.442C195.55 223.89 197.101 222.339 198.653 220.789C200.328 219.115 202.002 217.438 203.676 215.763C206.574 212.862 209.473 209.961 212.373 207.062C216.565 202.87 220.756 198.676 224.947 194.482C231.747 187.677 238.547 180.874 245.349 174.071C251.955 167.463 258.56 160.855 265.165 154.247C265.572 153.839 265.98 153.431 266.399 153.012C268.443 150.967 270.486 148.922 272.529 146.878C289.474 129.923 306.42 112.97 323.367 96.0187C322.545 96.5386 321.724 97.0591 320.903 97.58C320.446 97.8698 319.988 98.1596 319.517 98.4582C317.924 99.4882 316.4 100.586 314.885 101.727C311.382 104.33 307.824 106.851 304.254 109.36C302.589 110.531 300.928 111.706 299.267 112.881C298.604 113.349 297.941 113.817 297.278 114.286C296.95 114.518 296.621 114.749 296.283 114.988C293.3 117.096 293.3 117.096 292.306 117.798C291.642 118.267 290.979 118.736 290.316 119.205C288.665 120.371 287.014 121.537 285.361 122.7C281.976 125.084 278.605 127.486 275.254 129.918C271.11 132.925 266.917 135.86 262.72 138.791C260.009 140.688 257.31 142.602 254.609 144.514C253.631 145.205 252.652 145.895 251.673 146.584C248.274 148.977 244.892 151.39 241.531 153.835C238.629 155.944 235.694 157.996 232.727 160.012C229.791 162.007 226.902 164.049 224.052 166.166C221.214 168.267 218.32 170.286 215.425 172.306C213.149 173.894 210.881 175.49 208.627 177.108C205.264 179.521 201.882 181.908 198.5 184.294C196.835 185.469 195.17 186.646 193.505 187.822C192.842 188.29 192.18 188.759 191.517 189.227C191.188 189.459 190.86 189.691 190.522 189.93C187.539 192.037 187.539 192.037 186.544 192.74C185.882 193.208 185.22 193.675 184.559 194.143C182.884 195.326 181.209 196.509 179.534 197.691C176.197 200.046 172.865 202.407 169.545 204.786C167.104 206.534 164.649 208.262 162.195 209.991C159.767 211.705 157.36 213.445 154.956 215.193C151.718 217.547 148.433 219.822 145.122 222.071C142.202 224.062 139.332 226.115 136.474 228.194C133.795 230.142 131.101 232.068 128.388 233.968C126.652 235.185 124.933 236.418 123.231 237.683C122.693 238.078 122.693 238.078 122.144 238.481C121.455 238.986 120.77 239.498 120.09 240.015C119.78 240.241 119.469 240.467 119.149 240.7C118.879 240.902 118.609 241.104 118.33 241.313C117.075 241.852 116.418 241.62 115.121 241.218C114.094 240.751 113.081 240.251 112.081 239.73C111.79 239.58 111.5 239.43 111.2 239.275C110.253 238.784 109.309 238.288 108.364 237.793C107.702 237.448 107.04 237.103 106.378 236.759C102.335 234.65 98.323 232.489 94.332 230.284C90.4281 228.137 86.4711 226.099 82.5089 224.063C82.1716 223.89 81.8342 223.717 81.4867 223.538C80.1655 222.859 78.8442 222.181 77.5229 221.502C72.6598 219.004 67.8276 216.45 63.0132 213.859C61.917 213.27 60.8208 212.68 59.7246 212.09C59.4484 211.941 59.1721 211.793 58.8875 211.64C54.3024 209.174 49.6879 206.769 45.0583 204.387C40.8841 202.239 36.7519 200.024 32.642 197.755C29.5289 196.044 26.3703 194.446 23.1848 192.876C19.3463 190.972 15.5988 188.911 11.8455 186.845C9.51493 185.562 7.17475 184.299 4.82594 183.05C4.49796 182.875 4.16999 182.699 3.83207 182.519C2.56541 181.847 1.36265 181.251 0 180.796C0 180.333 0 179.869 0 179.391C11.8057 174.343 23.6383 169.365 35.5038 164.459C39.4838 162.814 43.4623 161.164 47.4404 159.514C47.8357 159.35 48.2309 159.186 48.6382 159.017C55.5821 156.137 62.5169 153.235 69.4495 150.327C75.8468 147.644 82.2479 144.97 88.651 142.301C89.3625 142.004 89.3625 142.004 90.0883 141.702C92.4166 140.731 94.7449 139.761 97.0733 138.79C100.523 137.353 103.972 135.914 107.422 134.475C109.125 133.765 110.829 133.055 112.532 132.344C113.199 132.066 113.867 131.788 114.534 131.509C136.57 122.319 158.607 113.129 180.644 103.939C181.013 103.785 181.383 103.631 181.765 103.472C182.488 103.17 183.212 102.868 183.936 102.566C185.664 101.846 187.392 101.125 189.119 100.404C192.144 99.143 195.168 97.8819 198.193 96.6216C199.916 95.9036 201.639 95.1854 203.362 94.4672C203.877 94.2525 203.877 94.2525 204.403 94.0334C209.815 91.7773 215.223 89.5122 220.63 87.2445C221.051 87.068 221.472 86.8915 221.905 86.7096C222.538 86.4441 222.538 86.4441 223.184 86.1732C229.353 83.5867 235.527 81.0147 241.706 78.4543C248.196 75.7654 254.679 73.0625 261.156 70.3454C268.27 67.3616 275.387 64.3851 282.507 61.4169C282.973 61.2229 283.438 61.0289 283.917 60.8291C286.283 59.8429 288.649 58.8568 291.015 57.8708C295.356 56.0615 299.696 54.2511 304.037 52.4407C306.386 51.4612 308.734 50.4818 311.083 49.5023C311.982 49.1273 312.882 48.7522 313.781 48.3771C315.419 47.6941 317.057 47.011 318.695 46.3279C319.065 46.1737 319.434 46.0194 319.816 45.8605C320.539 45.5586 321.263 45.2567 321.987 44.9548C323.715 44.2343 325.443 43.5137 327.171 42.7931C330.195 41.5318 333.219 40.2706 336.244 39.0104C337.967 38.2924 339.69 37.5742 341.413 36.856C341.928 36.6412 341.928 36.6412 342.454 36.4221C347.866 34.1659 353.275 31.9007 358.682 29.6329C365.77 26.6603 372.862 23.6987 379.962 20.7553C380.559 20.5078 380.559 20.5078 381.168 20.2553C381.564 20.091 381.961 19.9266 382.369 19.7573C393.959 14.9525 405.535 10.1163 417.107 5.26932C417.546 5.0854 417.986 4.90148 418.438 4.71199C419.689 4.18803 420.94 3.66387 422.191 3.13964C422.561 2.98479 422.93 2.82995 423.311 2.67042C423.66 2.52413 424.009 2.37784 424.369 2.22711C424.698 2.08939 425.028 1.95168 425.368 1.80979C425.999 1.54145 426.629 1.26671 427.255 0.985425C428.594 0.385557 429.513 0 431 0Z" fill="#8B3392"/></g>`,
  "#FFFFFF"
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
  `<g transform="translate(20, 22) scale(0.19)"><path d="M35.0336 159.514C35.6386 159.515 36.2436 159.514 36.8486 159.513C38.0294 159.511 39.2102 159.512 40.391 159.513C41.3519 159.513 42.3127 159.513 43.2735 159.513C43.4797 159.513 43.4797 159.513 43.6901 159.513C43.9694 159.513 44.2488 159.513 44.5282 159.513C47.1394 159.512 49.7507 159.513 52.3619 159.514C54.5959 159.516 56.8299 159.515 59.0639 159.514C61.6666 159.512 64.2694 159.512 66.8722 159.513C67.1504 159.513 67.4287 159.513 67.7069 159.513C67.9122 159.513 67.9122 159.513 68.1217 159.513C69.0798 159.513 70.038 159.513 70.9962 159.512C72.166 159.511 73.3359 159.512 74.5057 159.513C75.101 159.514 75.6963 159.514 76.2917 159.513C79.3892 159.508 82.4683 159.544 85.5139 160.175C85.6694 160.207 85.8248 160.238 85.985 160.271C90.7971 161.31 95.1868 163.42 99.024 166.483C99.111 166.552 99.198 166.621 99.2876 166.693C101.149 168.191 102.843 169.855 104.296 171.755C104.361 171.839 104.426 171.923 104.493 172.01C107.552 176.007 109.637 180.528 110.661 185.463C110.695 185.623 110.695 185.623 110.73 185.786C111.202 188.216 111.27 190.688 111.269 193.156C111.27 193.461 111.271 193.765 111.272 194.07C111.274 194.72 111.275 195.37 111.276 196.021C111.277 197.053 111.28 198.086 111.284 199.119C111.291 201.314 111.296 203.509 111.301 205.704C111.306 208.07 111.311 210.436 111.32 212.802C111.322 213.658 111.325 214.515 111.326 215.371C111.33 219.835 111.402 224.259 111.95 228.695C111.963 228.8 111.976 228.904 111.989 229.012C113.615 242.34 117.803 255.167 127.306 266.495C127.384 266.586 127.462 266.677 127.543 266.771C128.03 267.33 128.54 267.858 129.068 268.379C129.334 268.646 129.579 268.926 129.82 269.216C130.251 269.715 130.707 270.144 131.21 270.568C131.554 270.867 131.884 271.178 132.214 271.492C133.334 272.551 134.528 273.487 135.765 274.405C136.063 274.626 136.36 274.849 136.656 275.073C146.385 282.366 158.314 286.767 169.974 289.853C170.102 289.888 170.231 289.922 170.364 289.957C181.868 293.019 193.589 294.831 205.439 295.86C205.628 295.876 205.817 295.893 206.012 295.91C206.552 295.957 207.092 296.002 207.632 296.047C207.791 296.061 207.949 296.074 208.113 296.088C209.726 296.219 211.294 296.185 212.905 296.047C213.076 296.033 213.248 296.019 213.424 296.004C213.982 295.957 214.54 295.909 215.098 295.86C215.291 295.843 215.484 295.827 215.683 295.809C223.753 295.104 231.779 294.037 239.718 292.414C239.837 292.39 239.957 292.365 240.079 292.34C246.331 291.057 252.491 289.458 258.548 287.443C258.763 287.372 258.978 287.301 259.193 287.23C267.69 284.412 275.946 280.774 283.252 275.543C283.337 275.482 283.422 275.421 283.509 275.359C285.541 273.893 287.449 272.281 289.277 270.572C289.436 270.429 289.594 270.286 289.753 270.143C290.499 269.473 291.219 268.802 291.865 268.032C292.14 267.709 292.428 267.399 292.718 267.089C293.698 266.041 294.587 264.937 295.453 263.793C295.52 263.706 295.587 263.618 295.656 263.528C297.537 261.053 299.174 258.427 300.681 255.709C300.851 255.403 301.024 255.098 301.199 254.794C302.202 252.996 302.971 251.09 303.738 249.182C303.793 249.044 303.849 248.907 303.905 248.766C307.678 239.232 309.18 228.518 309.185 218.315C309.186 218.009 309.186 217.704 309.187 217.398C309.189 216.745 309.19 216.092 309.191 215.439C309.193 214.403 309.196 213.366 309.199 212.33C309.208 209.384 309.217 206.439 309.222 203.493C309.224 201.862 309.229 200.231 309.235 198.6C309.238 197.74 309.24 196.88 309.241 196.021C309.246 185.407 311.371 176.779 318.802 168.893C318.912 168.775 319.021 168.657 319.134 168.536C320.092 167.539 321.165 166.71 322.267 165.88C322.35 165.816 322.433 165.75 322.519 165.686C328.125 161.397 335.172 159.524 342.154 159.533C342.36 159.533 342.566 159.532 342.772 159.532C343.331 159.531 343.891 159.531 344.451 159.531C345.056 159.531 345.662 159.531 346.268 159.53C347.453 159.529 348.638 159.528 349.823 159.528C350.787 159.528 351.752 159.528 352.716 159.527C355.456 159.526 358.196 159.525 360.936 159.525C361.083 159.525 361.231 159.525 361.383 159.525C361.53 159.525 361.678 159.525 361.83 159.525C364.22 159.525 366.61 159.524 369 159.522C371.46 159.52 373.92 159.519 376.38 159.519C377.759 159.519 379.137 159.518 380.516 159.517C381.69 159.515 382.865 159.515 384.039 159.516C384.637 159.517 385.235 159.517 385.832 159.515C388.893 159.509 391.961 159.514 394.967 160.165C395.188 160.212 395.188 160.212 395.413 160.261C401.066 161.538 406.292 164.185 410.467 168.226C410.699 168.449 410.933 168.669 411.168 168.89C412.469 170.132 413.564 171.496 414.606 172.96C414.668 173.047 414.73 173.134 414.794 173.224C418.362 178.315 420.512 184.669 420.501 190.9C420.502 191.043 420.502 191.187 420.502 191.335C420.503 191.811 420.503 192.288 420.503 192.765C420.503 193.109 420.504 193.452 420.505 193.796C420.506 194.729 420.506 195.661 420.506 196.594C420.506 197.18 420.507 197.766 420.507 198.351C420.508 200.3 420.509 202.248 420.509 204.196C420.509 204.301 420.509 204.406 420.509 204.514C420.509 204.618 420.509 204.723 420.509 204.832C420.509 206.518 420.51 208.205 420.513 209.892C420.515 211.636 420.516 213.381 420.516 215.125C420.516 216.099 420.516 217.073 420.518 218.048C420.527 224.024 420.405 229.986 419.916 235.945C419.904 236.099 419.891 236.254 419.879 236.414C419.022 247.021 417.313 257.531 414.757 267.861C414.711 268.046 414.711 268.046 414.664 268.234C412.633 276.417 409.998 284.474 406.773 292.264C406.732 292.362 406.691 292.461 406.649 292.563C403.888 299.224 400.739 305.752 397.133 311.997C397.066 312.112 397 312.226 396.932 312.345C395.284 315.199 393.52 317.98 391.71 320.734C391.605 320.894 391.501 321.053 391.393 321.218C389.321 324.361 387.095 327.406 384.78 330.374C384.646 330.548 384.512 330.721 384.378 330.894C383.625 331.863 382.854 332.813 382.057 333.746C381.643 334.231 381.24 334.722 380.845 335.223C380.331 335.871 379.787 336.486 379.23 337.098C378.942 337.414 378.659 337.734 378.378 338.057C377.872 338.638 377.357 339.211 376.841 339.783C376.624 340.023 376.408 340.264 376.192 340.506C374.469 342.44 372.675 344.302 370.847 346.135C370.731 346.251 370.731 346.251 370.613 346.37C369.816 347.17 369.013 347.955 368.154 348.69C367.857 348.948 367.58 349.222 367.307 349.505C366.832 349.986 366.341 350.435 365.829 350.875C365.446 351.209 365.073 351.552 364.699 351.897C364.03 352.507 363.342 353.084 362.638 353.652C362.11 354.086 361.597 354.535 361.084 354.985C360.116 355.829 359.122 356.632 358.105 357.417C357.791 357.659 357.479 357.903 357.166 358.148C354.981 359.857 352.772 361.523 350.496 363.111C350.103 363.386 349.711 363.662 349.319 363.939C347.366 365.313 345.381 366.619 343.356 367.883C343.094 368.047 342.833 368.211 342.572 368.375C331.81 375.114 320.322 380.566 231.085 399.686C230.962 399.692 230.84 399.697 230.714 399.703C229.749 399.749 228.783 399.784 227.818 399.818C227.554 399.827 227.554 399.827 227.286 399.837C222.081 400.025 216.873 399.996 211.666 399.996C210.769 399.996 209.872 399.997 208.975 399.999C200.687 400.016 192.396 399.966 184.124 399.394C183.933 399.381 183.743 399.369 183.547 399.355C167.752 398.301 152.121 396.041 118.305 387.014C118.18 386.972 118.054 386.931 117.925 386.889C107.439 383.448 96.9812 379.235 87.3477 373.816C86.9604 373.6 86.5707 373.389 86.18 373.18C80.3369 370.045 74.7507 366.451 69.3488 362.611C69.2335 362.529 69.1183 362.447 68.9995 362.363C67.3803 361.213 65.8008 360.02 64.2409 358.791C63.9428 358.557 63.6441 358.323 63.3451 358.09C61.6856 356.793 60.0615 355.457 58.4585 354.092C58.1985 353.871 57.938 353.65 57.6774 353.43C56.7018 352.602 55.746 351.757 54.8099 350.885C54.3749 350.479 53.9358 350.081 53.4849 349.693C52.9854 349.262 52.5216 348.803 52.0633 348.328C51.7863 348.059 51.5055 347.811 51.2118 347.56C50.3511 346.812 49.5531 346.001 48.7486 345.193C48.4768 344.921 48.2043 344.649 47.9317 344.377C47.1318 343.578 46.3375 342.781 45.6086 341.915C45.3743 341.645 45.1257 341.395 44.8704 341.145C44.4164 340.698 43.9968 340.23 43.5812 339.747C43.2453 339.363 42.9001 338.988 42.5544 338.612C41.9271 337.925 41.3347 337.217 40.7503 336.493C40.4499 336.127 40.1409 335.773 39.8241 335.421C38.632 334.092 37.5385 332.68 36.4409 331.274C36.1958 330.96 35.9496 330.648 35.7034 330.335C34.4742 328.77 33.2933 327.177 32.1417 325.554C32.061 325.441 31.9804 325.328 31.8973 325.212C27.7584 319.419 24.0157 313.322 20.6933 307.026C20.6069 306.863 20.5204 306.7 20.4313 306.532C16.9124 299.892 13.9017 293.021 11.3232 285.963C11.2065 285.644 11.089 285.326 10.9712 285.007C8.83137 279.205 7.11036 273.26 5.62975 267.258C5.59974 267.136 5.56974 267.015 5.53883 266.89C2.24861 253.524 0.533992 239.802 0.031945 221.81C0.031245 221.457 0.0304878 221.104 0.0296787 220.752C0.0277306 219.807 0.0267382 218.863 0.0260631 217.918C0.0256175 217.325 0.0249984 216.733 0.02433 216.14C0.0224995 214.49 0.0209453 212.84 0.0204317 211.19C0.0203987 211.085 0.0203647 210.98 0.0203306 210.872C0.0202977 210.767 0.0202656 210.662 0.0202318 210.554C0.020165 210.341 0.0200972 210.129 0.0200295 209.916C0.0199961 209.811 0.0199627 209.705 0.0199284 209.597C0.019333 207.886 0.0167007 206.176 0.0131983 204.466C0.00960804 202.698 0.00774639 200.93 0.0075715 199.162C0.00741474 198.174 0.00654966 197.186 0.00383411 196.198C0.00132908 195.269 0.00103814 194.34 0.00234926 193.411C0.00246406 193.074 0.00182798 192.736 0.000321965 192.398C-0.0354036 183.873 2.90184 175.596 8.88181 169.414C9.10426 169.184 9.32338 168.95 9.54275 168.717C12.1419 165.992 15.3375 163.997 18.7351 162.415C18.9061 162.335 19.0772 162.255 19.2535 162.172C21.2626 161.271 23.3459 160.658 25.4949 160.193C25.6296 160.164 25.7643 160.134 25.9032 160.103C28.9127 159.486 31.9761 159.509 35.0336 159.514Z" fill="#FAD401"/><path d="M342.154 159.531C342.359 159.53 342.565 159.53 342.771 159.529C343.33 159.529 343.89 159.529 344.45 159.529C345.056 159.529 345.662 159.528 346.267 159.527C347.452 159.526 348.637 159.526 349.822 159.525C350.787 159.525 351.751 159.525 352.715 159.525C355.455 159.523 358.195 159.523 360.935 159.523C361.082 159.523 361.23 159.523 361.382 159.523C361.529 159.523 361.677 159.523 361.829 159.523C364.219 159.523 366.609 159.521 368.999 159.519C371.459 159.517 373.919 159.516 376.379 159.516C377.758 159.516 379.137 159.516 380.515 159.514C381.69 159.513 382.864 159.512 384.038 159.514C384.636 159.514 385.234 159.514 385.832 159.513C388.893 159.506 391.96 159.511 394.966 160.163C395.187 160.21 395.187 160.21 395.412 160.258C401.065 161.535 406.291 164.182 410.466 168.223C410.698 168.447 410.932 168.667 411.167 168.887C412.468 170.129 413.563 171.494 414.606 172.957C414.668 173.044 414.73 173.131 414.794 173.221C418.361 178.312 420.512 184.667 420.501 190.897C420.501 191.112 420.501 191.112 420.502 191.332C420.503 191.809 420.502 192.285 420.502 192.762C420.503 193.106 420.503 193.45 420.504 193.794C420.505 194.726 420.505 195.659 420.506 196.591C420.506 197.177 420.506 197.763 420.506 198.349C420.508 200.297 420.508 202.245 420.508 204.193C420.508 204.298 420.508 204.403 420.508 204.511C420.508 204.668 420.508 204.668 420.508 204.829C420.508 206.516 420.51 208.203 420.512 209.889C420.514 211.634 420.515 213.378 420.515 215.122C420.515 216.097 420.515 217.071 420.517 218.045C420.526 224.021 420.404 229.983 419.916 235.942C419.903 236.097 419.891 236.252 419.878 236.411C419.021 247.018 417.312 257.528 414.756 267.858C414.726 267.981 414.695 268.105 414.664 268.232C412.632 276.414 409.997 284.471 406.773 292.261C406.732 292.36 406.691 292.459 406.649 292.561C403.887 299.221 400.739 305.75 397.132 311.994C397.066 312.109 397 312.224 396.931 312.342C395.283 315.196 393.519 317.978 391.709 320.731C391.604 320.891 391.5 321.051 391.392 321.215C389.32 324.359 387.095 327.404 384.78 330.372C384.646 330.545 384.511 330.718 384.377 330.891C383.624 331.86 382.854 332.81 382.056 333.743C381.642 334.228 381.239 334.72 380.844 335.22C380.33 335.869 379.786 336.484 379.229 337.095C378.941 337.412 378.658 337.731 378.378 338.054C377.871 338.635 377.357 339.208 376.84 339.78C376.623 340.021 376.407 340.262 376.192 340.504C374.469 342.437 372.674 344.299 370.846 346.132C370.769 346.21 370.692 346.287 370.612 346.367C369.815 347.167 369.012 347.953 368.154 348.688C367.856 348.946 367.579 349.219 367.306 349.503C366.831 349.983 366.34 350.432 365.828 350.872C365.445 351.206 365.072 351.55 364.698 351.894C364.029 352.504 363.341 353.081 362.637 353.649C362.109 354.083 361.596 354.532 361.083 349.982C360.115 355.827 359.121 356.629 358.104 357.414C357.79 357.657 357.478 357.901 357.166 358.145C354.98 359.855 352.771 361.52 350.495 363.108C350.102 363.383 349.71 363.66 349.318 363.937C347.366 365.31 345.38 366.617 343.355 367.88C343.094 368.044 342.832 368.208 342.571 368.373C331.81 375.111 320.322 380.563 228.195 399.801C227.842 399.814 227.49 399.828 227.138 399.842C221.645 400.056 216.141 399.98 210.645 399.966C210.645 399.916 210.645 399.866 210.645 399.815C210.794 399.8 210.944 399.785 211.099 399.769C222.193 398.644 232.692 395.642 241.525 388.517C241.668 388.403 241.811 388.289 241.959 388.171C242.898 387.414 243.801 386.623 244.688 385.806C244.777 385.725 244.866 385.644 244.957 385.56C246.425 384.231 246.425 384.231 247.765 382.776C248.04 382.447 248.331 382.137 248.624 381.823C249.594 380.748 250.452 379.585 251.316 378.425C251.384 378.335 251.452 378.244 251.522 378.152C255.768 372.492 258.677 365.725 260.204 358.842C260.233 358.714 260.262 358.585 260.292 358.453C261.511 353.02 261.617 347.188 260.957 341.67C260.939 341.51 260.921 341.351 260.903 341.187C259.886 332.302 256.439 323.815 250.864 316.815C250.749 316.667 250.633 316.519 250.514 316.366C249.048 314.526 247.393 312.649 245.545 311.185C245.002 310.748 244.476 310.301 243.963 309.829C243.041 308.991 242.064 308.229 241.073 307.475C240.983 307.406 240.892 307.338 240.799 307.267C236.276 303.843 231.34 301.225 225.991 299.343C225.637 299.218 225.283 299.09 224.93 298.961C220.374 297.346 215.45 296.733 210.645 296.479C211.117 296.164 211.284 296.13 211.83 296.088C211.981 296.076 212.132 296.064 212.287 296.052C212.452 296.039 212.617 296.027 212.787 296.015C213.145 295.986 213.502 295.958 213.86 295.929C214.144 295.907 214.144 295.907 214.434 295.885C215.433 295.806 216.432 295.723 217.43 295.637C217.532 295.629 217.633 295.62 217.738 295.611C225.115 294.979 232.464 293.895 239.717 292.412C239.837 292.387 239.956 292.363 240.079 292.338C246.33 291.054 252.49 289.455 258.547 287.441C258.762 287.369 258.977 287.298 259.193 287.227C267.689 284.409 275.945 280.771 283.251 275.54C283.336 275.479 283.421 275.419 283.509 275.356C285.54 273.891 287.448 272.278 289.276 270.569C289.435 270.426 289.594 270.283 289.753 270.14C290.498 269.47 291.219 268.799 291.864 268.029C292.139 267.706 292.427 267.396 292.717 267.087C293.697 266.039 294.586 264.934 295.453 263.791C295.519 263.703 295.586 263.616 295.655 263.526C297.536 261.05 299.173 258.424 300.68 255.707C300.85 255.4 301.024 255.096 301.198 254.791C302.201 252.993 302.971 251.087 303.738 249.179C303.793 249.042 303.848 248.905 303.905 248.763C307.678 239.229 309.179 228.516 309.184 218.312C309.185 218.007 309.186 217.701 309.187 217.395C309.188 216.742 309.189 216.09 309.19 215.437C309.192 214.4 309.195 213.364 309.198 212.327C309.208 209.382 309.216 206.436 309.221 203.49C309.224 201.859 309.228 200.228 309.234 198.597C309.237 197.737 309.24 196.878 309.24 196.018C309.246 185.404 311.371 176.776 318.801 168.89C318.911 168.772 319.021 168.654 319.134 168.533C320.091 167.536 321.165 166.707 322.266 165.877C322.349 165.813 322.432 165.75 322.518 165.684C328.125 161.395 335.171 159.522 342.154 159.531Z" fill="#0C55A3"/><path d="M59.6051 0.000159866C59.7378 0.000250888 59.8705 0.00034191 60.0072 0.000435688C73.754 0.0259466 87.1414 4.83621 97.694 13.6572C97.9464 13.8671 98.2011 14.0736 98.4569 14.2794C99.7132 15.3061 100.86 16.4436 102.009 17.5869C102.09 17.6669 102.171 17.7468 102.254 17.8292C103.308 18.8751 104.275 19.9547 105.201 21.1174C105.342 21.2834 105.483 21.4486 105.627 21.6123C108.129 24.4819 110.159 27.7079 111.962 31.0522C112.114 31.3314 112.271 31.6081 112.428 31.8844C115.454 37.301 117.276 43.4867 118.278 49.5782C118.307 49.7563 118.337 49.9344 118.367 50.1179C118.821 53.0509 118.966 55.9712 118.956 58.9365C118.955 59.1885 118.955 59.1885 118.955 59.4457C118.948 62.064 118.852 64.6202 118.457 67.212C118.431 67.389 118.405 67.566 118.378 67.7484C117.582 73.1029 116.079 78.3404 113.808 83.2581C113.65 83.6015 113.496 83.9464 113.343 84.2921C112.065 87.1389 110.446 89.8109 108.665 92.3682C108.602 92.4611 108.538 92.5539 108.472 92.6496C107.17 94.543 105.733 96.3414 104.176 98.0312C103.989 98.2354 103.805 98.4408 103.624 98.6505C102.885 99.511 102.097 100.314 101.294 101.115C101.165 101.244 101.036 101.373 100.903 101.507C100.151 102.258 99.3852 102.98 98.5728 103.666C98.4818 103.743 98.3908 103.82 98.297 103.899C96.7374 105.205 95.1178 106.417 93.4512 107.582C93.3559 107.649 93.2607 107.716 93.1625 107.785C91.6348 108.853 90.0336 109.783 88.4051 110.687C88.1712 110.817 87.9378 110.948 87.705 111.079C79.3398 115.809 69.4324 118.006 59.8782 118.014C59.7626 118.014 59.647 118.014 59.5279 118.014C45.7598 117.995 31.8546 113.123 19.4889 102.31C19.3381 102.173 19.1873 102.037 19.0364 101.9C17.882 100.851 16.7513 99.7929 15.7354 98.6073C15.4928 98.3256 15.2477 98.0475 14.9998 97.7705C5.59583 87.196 0.459373 73.2072 0.480534 59.0965C0.480625 58.9826 0.480716 58.8687 0.48081 58.7514C0.505662 47.1813 3.89188 35.4326 10.6014 25.9378C10.7177 25.7707 10.834 25.6036 10.9503 25.4365C13.618 21.6298 16.7066 17.9684 20.2421 14.9414C20.3938 14.8085 20.5454 14.6755 20.6969 14.5424C23.0183 12.5137 25.4827 10.7331 28.0752 9.06656C28.1724 9.00374 28.2697 8.94093 28.37 8.87621C36.1952 3.87047 45.367 0.992819 54.5871 0.17904C54.745 0.164731 54.9028 0.150423 55.0655 0.135681C56.5789 0.0120854 58.0878 -0.00177018 59.6051 0.000159866Z" fill="#FBD500"/><path d="M385.233 5.29965C385.362 5.35688 385.49 5.41412 385.622 5.47309C390.399 7.61883 394.786 10.5246 398.79 13.8859C398.937 14.0042 399.083 14.1224 399.234 14.2442C400.484 15.2697 401.631 16.3963 402.773 17.5388C402.851 17.6171 402.93 17.6953 403.01 17.7759C403.896 18.6612 404.763 19.5546 405.569 20.5139C405.646 20.6046 405.722 20.6952 405.801 20.7887C407.108 22.3482 408.32 23.9685 409.486 25.6355C409.553 25.7307 409.619 25.826 409.688 25.9241C410.759 27.4557 411.689 29.0619 412.597 30.6939C412.771 31.0069 412.947 31.3187 413.124 31.6303C416.797 38.27 418.824 45.8333 419.578 53.3525C419.593 53.4899 419.607 53.6273 419.622 53.7688C419.777 55.4555 419.766 57.1489 419.766 58.8413C419.767 59.0873 419.767 59.0873 419.767 59.3382C419.764 61.9905 419.669 64.5838 419.277 67.211C419.238 67.4722 419.238 67.4722 419.199 67.7386C418.233 74.0096 416.36 80.1362 413.399 85.7597C413.245 86.0533 413.095 86.3486 412.945 86.6442C410.831 90.7757 408.141 94.6174 404.996 98.0302C404.722 98.3307 404.456 98.6357 404.191 98.944C403.538 99.6912 402.844 100.394 402.142 101.095C402.009 101.228 401.875 101.362 401.738 101.499C400.95 102.28 400.159 103.019 399.283 103.698C398.951 103.958 398.647 104.234 398.339 104.522C388.31 113.526 373.916 118.023 360.623 118.004C360.506 118.003 360.388 118.003 360.267 118.003C350.766 117.983 341.57 115.66 333.113 111.347C332.972 111.276 332.831 111.204 332.686 111.13C329.454 109.471 326.461 107.435 323.623 105.171C323.471 105.051 323.319 104.931 323.162 104.807C322.266 104.088 321.417 103.324 320.576 102.543C320.241 102.235 319.902 101.936 319.556 101.641C318.307 100.556 317.16 99.3519 316.091 98.0914C315.964 97.9473 315.837 97.8032 315.705 97.6548C306.416 87.1024 301.302 73.2085 301.291 59.1802C301.291 59.0607 301.291 58.9412 301.291 58.8181C301.31 44.4597 306.621 30.2804 316.694 19.3088C316.824 19.1653 316.953 19.0218 317.087 18.8739C318.39 17.4339 319.732 16.0484 321.213 14.7897C321.366 14.6557 321.519 14.5215 321.671 14.3872C333.171 4.31773 348.072 -0.376483 385.233 5.29965Z" fill="#0C55A3"/></g>`,
  "#FFFFFF"
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
          "relative shrink-0 overflow-hidden border border-(--bdp-border)",
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
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bdp-scrollbar flex max-h-[300px] flex-col gap-2.5 overflow-y-auto pr-1", children: options.map((opt) => {
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
            loading ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              LoaderCircle,
              {
                className: "size-4 shrink-0 animate-spin",
                style: { color: b.color }
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChevronRight, { className: "size-4 shrink-0 text-(--bdp-muted-fg) transition-transform group-hover:translate-x-0.5" })
          ]
        },
        opt.method
      );
    }) }),
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
  const [successResult, setSuccessResult] = (0, import_react5.useState)(
    null
  );
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
                  "relative bg-(--bdp-bg) px-6 pb-4 text-(--bdp-fg) transition-colors",
                  step === "method" || step === "cod-choice" ? "pt-10" : "pt-6"
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
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "mt-5 flex items-center justify-between rounded-xl border border-(--bdp-border) bg-(--bdp-bg) px-4 py-2.5", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "text-xs font-semibold uppercase tracking-widest text-(--bdp-muted-fg)", children: isAdvanceMode ? "Advance Payable" : "Amount Payable" }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      "span",
                      {
                        className: "text-lg font-extrabold",
                        style: { color: "var(--bdp-primary)" },
                        children: currentAmountLabel
                      }
                    )
                  ] })
                ]
              }
            ),
            showStepRail && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex items-center px-6 py-3", children: ["Method", "Details", "Confirm"].map((label, i) => {
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
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "max-h-[55vh] overflow-y-auto bdp-scrollbar px-6 py-4", children: [
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
                        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                          CircleCheck,
                          {
                            className: "size-8 text-white",
                            strokeWidth: 2.5
                          }
                        )
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
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      "span",
                      {
                        className: "font-bold",
                        style: { color: brand?.color ?? "var(--bdp-primary)" },
                        children: currentAmountLabel
                      }
                    )
                  ] })
                ] })
              ] })
            ] }),
            showFooter && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "border-t border-(--bdp-border) px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
            step === "success" && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "border-t border-(--bdp-border) px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
  .bd-payments-scope .mt-1 {
    margin-top: var(--spacing);
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
  .bd-payments-scope .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .bd-payments-scope .py-6 {
    padding-block: calc(var(--spacing) * 6);
  }
  .bd-payments-scope .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .bd-payments-scope .pt-6 {
    padding-top: calc(var(--spacing) * 6);
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
@layer utilities {
  .bd-payments-scope .bdp-scrollbar::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  .bd-payments-scope .bdp-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .bd-payments-scope .bdp-scrollbar::-webkit-scrollbar-thumb {
    background: var(--bdp-border);
    border-radius: 9999px;
  }
  .bd-payments-scope .bdp-scrollbar::-webkit-scrollbar-thumb:hover {
    background: var(--bdp-muted-fg);
  }
  .bd-payments-scope .bdp-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: var(--bdp-border) transparent;
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
