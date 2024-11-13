// module/actor.js
var MouseGuardActor = class extends Actor {
  /** @inheritdoc */
  prepareDerivedData() {
    super.prepareDerivedData();
  }
  prepareData() {
    super.prepareData();
    this._prepareCharacterData(this);
  }
  _prepareCharacterData(actorData) {
    this.system.itemTypes = this.itemTypes;
  }
  async _preCreate(data, options, user) {
    await super._preCreate(data, options, user);
    const abilities = [];
    let create_ability;
    if ((data.type === "character" || data.type === "mouse") && this.itemTypes.ability.length <= 0) {
      create_ability = [
        "MOUSEGUARD.MNature",
        "MOUSEGUARD.Will",
        "MOUSEGUARD.Health",
        "MOUSEGUARD.Resources",
        "MOUSEGUARD.Circles"
      ];
    } else if (data.type === "weasel" && this.itemTypes.ability.length <= 0) {
      create_ability = [
        "MOUSEGUARD.WNature",
        "MOUSEGUARD.Will",
        "MOUSEGUARD.Health",
        "MOUSEGUARD.Resources",
        "MOUSEGUARD.Circles"
      ];
    } else if (data.type === "animal" && this.itemTypes.ability.length <= 0) {
      create_ability = [
        game.i18n.localize("MOUSEGUARD.Nature") + " (" + data.name + ")"
      ];
    }
    if (Object(create_ability).length > 0) {
      for (let i of create_ability) {
        abilities.push({
          name: i,
          type: "ability"
        });
      }
      this.updateSource({
        items: abilities,
        img: "systems/mouseguard/assets/icons/seated-mouse.svg"
      });
    }
  }
};

// module/item.js
var MouseGuardItem = class extends Item {
  /** @inheritdoc */
  prepareDerivedData() {
    super.prepareDerivedData();
    this.system.groups = this.system.groups || {};
    this.system.attributes = this.system.attributes || {};
  }
  /* -------------------------------------------- */
};

// module/item-sheet.js
var MouseGuardItemSheet = class extends ItemSheet {
  /** @inheritdoc */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["mouseguard", "sheet", "item"],
      template: "systems/mouseguard/templates/item-sheet.html",
      width: 520,
      height: 480,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "description"
        }
      ],
      scrollY: [".attributes"]
    });
  }
  /* -------------------------------------------- */
  /** @inheritdoc */
  getData() {
    const context = super.getData();
    context.systemData = context.item.system;
    return context;
  }
  /* -------------------------------------------- */
  /** @inheritdoc */
  async activateListeners(html2) {
    super.activateListeners(html2);
  }
  /* -------------------------------------------- */
};

// node_modules/svelte/src/version.js
var PUBLIC_VERSION = "5";

// node_modules/svelte/src/internal/disclose-version.js
if (typeof window !== "undefined")
  (window.__svelte ||= { v: /* @__PURE__ */ new Set() }).v.add(PUBLIC_VERSION);

// node_modules/svelte/src/internal/flags/index.js
var legacy_mode_flag = false;
function enable_legacy_mode_flag() {
  legacy_mode_flag = true;
}

// node_modules/svelte/src/internal/flags/legacy.js
enable_legacy_mode_flag();

// node_modules/svelte/src/constants.js
var EACH_ITEM_REACTIVE = 1;
var EACH_INDEX_REACTIVE = 1 << 1;
var EACH_IS_CONTROLLED = 1 << 2;
var EACH_IS_ANIMATED = 1 << 3;
var EACH_ITEM_IMMUTABLE = 1 << 4;
var PROPS_IS_IMMUTABLE = 1;
var PROPS_IS_RUNES = 1 << 1;
var PROPS_IS_UPDATED = 1 << 2;
var PROPS_IS_BINDABLE = 1 << 3;
var PROPS_IS_LAZY_INITIAL = 1 << 4;
var TRANSITION_OUT = 1 << 1;
var TRANSITION_GLOBAL = 1 << 2;
var TEMPLATE_FRAGMENT = 1;
var TEMPLATE_USE_IMPORT_NODE = 1 << 1;
var HYDRATION_START = "[";
var HYDRATION_START_ELSE = "[!";
var HYDRATION_END = "]";
var HYDRATION_ERROR = {};
var ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
var UNINITIALIZED = Symbol();
var FILENAME = Symbol("filename");
var HMR = Symbol("hmr");

// node_modules/esm-env/browser.js
var DEV = false;

// node_modules/svelte/src/internal/client/warnings.js
var bold = "font-weight: bold";
var normal = "font-weight: normal";
function hydration_attribute_changed(attribute, html2, value) {
  if (DEV) {
    console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${attribute}\` attribute on \`${html2}\` changed its value between server and client renders. The client value, \`${value}\`, will be ignored in favour of the server value`, bold, normal);
  } else {
    console.warn("hydration_attribute_changed");
  }
}
function hydration_html_changed(location) {
  if (DEV) {
    console.warn(`%c[svelte] hydration_html_changed
%c${location ? `The value of an \`{@html ...}\` block ${location} changed between server and client renders. The client value will be ignored in favour of the server value` : "The value of an `{@html ...}` block changed between server and client renders. The client value will be ignored in favour of the server value"}`, bold, normal);
  } else {
    console.warn("hydration_html_changed");
  }
}
function hydration_mismatch(location) {
  if (DEV) {
    console.warn(`%c[svelte] hydration_mismatch
%c${location ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${location}` : "Hydration failed because the initial UI does not match what was rendered on the server"}`, bold, normal);
  } else {
    console.warn("hydration_mismatch");
  }
}
function lifecycle_double_unmount() {
  if (DEV) {
    console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted`, bold, normal);
  } else {
    console.warn("lifecycle_double_unmount");
  }
}
function ownership_invalid_binding(parent, child2, owner) {
  if (DEV) {
    console.warn(`%c[svelte] ownership_invalid_binding
%c${parent} passed a value to ${child2} with \`bind:\`, but the value is owned by ${owner}. Consider creating a binding between ${owner} and ${parent}`, bold, normal);
  } else {
    console.warn("ownership_invalid_binding");
  }
}
function ownership_invalid_mutation(component2, owner) {
  if (DEV) {
    console.warn(`%c[svelte] ownership_invalid_mutation
%c${component2 ? `${component2} mutated a value owned by ${owner}. This is strongly discouraged. Consider passing values to child components with \`bind:\`, or use a callback instead` : "Mutating a value outside the component that created it is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead"}`, bold, normal);
  } else {
    console.warn("ownership_invalid_mutation");
  }
}
function state_proxy_equality_mismatch(operator) {
  if (DEV) {
    console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results`, bold, normal);
  } else {
    console.warn("state_proxy_equality_mismatch");
  }
}

// node_modules/svelte/src/internal/shared/utils.js
var is_array = Array.isArray;
var array_from = Array.from;
var object_keys = Object.keys;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
var get_descriptors = Object.getOwnPropertyDescriptors;
var object_prototype = Object.prototype;
var array_prototype = Array.prototype;
var get_prototype_of = Object.getPrototypeOf;
var noop = () => {
};
function run(fn) {
  return fn();
}
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}

// node_modules/svelte/src/internal/client/constants.js
var DERIVED = 1 << 1;
var EFFECT = 1 << 2;
var RENDER_EFFECT = 1 << 3;
var BLOCK_EFFECT = 1 << 4;
var BRANCH_EFFECT = 1 << 5;
var ROOT_EFFECT = 1 << 6;
var UNOWNED = 1 << 7;
var DISCONNECTED = 1 << 8;
var CLEAN = 1 << 9;
var DIRTY = 1 << 10;
var MAYBE_DIRTY = 1 << 11;
var INERT = 1 << 12;
var DESTROYED = 1 << 13;
var EFFECT_RAN = 1 << 14;
var EFFECT_TRANSPARENT = 1 << 15;
var LEGACY_DERIVED_PROP = 1 << 16;
var INSPECT_EFFECT = 1 << 17;
var HEAD_EFFECT = 1 << 18;
var EFFECT_HAS_DERIVED = 1 << 19;
var STATE_SYMBOL = Symbol("$state");
var STATE_SYMBOL_METADATA = Symbol("$state metadata");
var LOADING_ATTR_SYMBOL = Symbol("");

// node_modules/svelte/src/internal/client/reactivity/equality.js
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}

// node_modules/svelte/src/internal/client/errors.js
function derived_references_self() {
  if (DEV) {
    const error = new Error(`derived_references_self
A derived value cannot reference itself recursively`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error("derived_references_self");
  }
}
function effect_in_teardown(rune) {
  if (DEV) {
    const error = new Error(`effect_in_teardown
\`${rune}\` cannot be used inside an effect cleanup function`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error("effect_in_teardown");
  }
}
function effect_in_unowned_derived() {
  if (DEV) {
    const error = new Error(`effect_in_unowned_derived
Effect cannot be created inside a \`$derived\` value that was not itself created inside an effect`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error("effect_in_unowned_derived");
  }
}
function effect_orphan(rune) {
  if (DEV) {
    const error = new Error(`effect_orphan
\`${rune}\` can only be used inside an effect (e.g. during component initialisation)`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error("effect_orphan");
  }
}
function effect_update_depth_exceeded() {
  if (DEV) {
    const error = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error("effect_update_depth_exceeded");
  }
}
function hydration_failed() {
  if (DEV) {
    const error = new Error(`hydration_failed
Failed to hydrate the application`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error("hydration_failed");
  }
}
function props_invalid_value(key) {
  if (DEV) {
    const error = new Error(`props_invalid_value
Cannot do \`bind:${key}={undefined}\` when \`${key}\` has a fallback value`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error("props_invalid_value");
  }
}
function rune_outside_svelte(rune) {
  if (DEV) {
    const error = new Error(`rune_outside_svelte
The \`${rune}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error("rune_outside_svelte");
  }
}
function state_descriptors_fixed() {
  if (DEV) {
    const error = new Error(`state_descriptors_fixed
Property descriptors defined on \`$state\` objects must contain \`value\` and always be \`enumerable\`, \`configurable\` and \`writable\`.`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error("state_descriptors_fixed");
  }
}
function state_prototype_fixed() {
  if (DEV) {
    const error = new Error(`state_prototype_fixed
Cannot set prototype of \`$state\` object`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error("state_prototype_fixed");
  }
}
function state_unsafe_local_read() {
  if (DEV) {
    const error = new Error(`state_unsafe_local_read
Reading state that was created inside the same derived is forbidden. Consider using \`untrack\` to read locally created state`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error("state_unsafe_local_read");
  }
}
function state_unsafe_mutation() {
  if (DEV) {
    const error = new Error(`state_unsafe_mutation
Updating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\``);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error("state_unsafe_mutation");
  }
}

// node_modules/svelte/src/internal/client/reactivity/sources.js
var inspect_effects = /* @__PURE__ */ new Set();
function set_inspect_effects(v) {
  inspect_effects = v;
}
function source(v) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    version: 0
  };
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable = false) {
  const s = source(initial_value);
  if (!immutable) {
    s.equals = safe_equals;
  }
  if (legacy_mode_flag && component_context !== null && component_context.l !== null) {
    (component_context.l.s ??= []).push(s);
  }
  return s;
}
function mutable_state(v, immutable = false) {
  return /* @__PURE__ */ push_derived_source(/* @__PURE__ */ mutable_source(v, immutable));
}
// @__NO_SIDE_EFFECTS__
function push_derived_source(source2) {
  if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
    if (derived_sources === null) {
      set_derived_sources([source2]);
    } else {
      derived_sources.push(source2);
    }
  }
  return source2;
}
function set(source2, value) {
  if (active_reaction !== null && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (derived_sources === null || !derived_sources.includes(source2))) {
    state_unsafe_mutation();
  }
  return internal_set(source2, value);
}
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    source2.v = value;
    source2.version = increment_version();
    mark_reactions(source2, DIRTY);
    if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & BRANCH_EFFECT) === 0) {
      if (new_deps !== null && new_deps.includes(source2)) {
        set_signal_status(active_effect, DIRTY);
        schedule_effect(active_effect);
      } else {
        if (untracked_writes === null) {
          set_untracked_writes([source2]);
        } else {
          untracked_writes.push(source2);
        }
      }
    }
    if (DEV && inspect_effects.size > 0) {
      const inspects = Array.from(inspect_effects);
      var previously_flushing_effect = is_flushing_effect;
      set_is_flushing_effect(true);
      try {
        for (const effect2 of inspects) {
          if ((effect2.f & CLEAN) !== 0) {
            set_signal_status(effect2, MAYBE_DIRTY);
          }
          if (check_dirtiness(effect2)) {
            update_effect(effect2);
          }
        }
      } finally {
        set_is_flushing_effect(previously_flushing_effect);
      }
      inspect_effects.clear();
    }
  }
  return value;
}
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var runes = is_runes();
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) continue;
    if (!runes && reaction === active_effect) continue;
    if (DEV && (flags & INSPECT_EFFECT) !== 0) {
      inspect_effects.add(reaction);
      continue;
    }
    set_signal_status(reaction, status);
    if ((flags & (CLEAN | UNOWNED)) !== 0) {
      if ((flags & DERIVED) !== 0) {
        mark_reactions(
          /** @type {Derived} */
          reaction,
          MAYBE_DIRTY
        );
      } else {
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}

// node_modules/svelte/src/internal/client/reactivity/deriveds.js
// @__NO_SIDE_EFFECTS__
function derived(fn) {
  var flags = DERIVED | DIRTY;
  if (active_effect === null) {
    flags |= UNOWNED;
  } else {
    active_effect.f |= EFFECT_HAS_DERIVED;
  }
  const signal = {
    children: null,
    ctx: component_context,
    deps: null,
    equals,
    f: flags,
    fn,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: active_effect
  };
  if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
    var derived3 = (
      /** @type {Derived} */
      active_reaction
    );
    (derived3.children ??= []).push(signal);
  }
  return signal;
}
// @__NO_SIDE_EFFECTS__
function derived_safe_equal(fn) {
  const signal = /* @__PURE__ */ derived(fn);
  signal.equals = safe_equals;
  return signal;
}
function destroy_derived_children(derived3) {
  var children = derived3.children;
  if (children !== null) {
    derived3.children = null;
    for (var i = 0; i < children.length; i += 1) {
      var child2 = children[i];
      if ((child2.f & DERIVED) !== 0) {
        destroy_derived(
          /** @type {Derived} */
          child2
        );
      } else {
        destroy_effect(
          /** @type {Effect} */
          child2
        );
      }
    }
  }
}
var stack = [];
function execute_derived(derived3) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(derived3.parent);
  if (DEV) {
    let prev_inspect_effects = inspect_effects;
    set_inspect_effects(/* @__PURE__ */ new Set());
    try {
      if (stack.includes(derived3)) {
        derived_references_self();
      }
      stack.push(derived3);
      destroy_derived_children(derived3);
      value = update_reaction(derived3);
    } finally {
      set_active_effect(prev_active_effect);
      set_inspect_effects(prev_inspect_effects);
      stack.pop();
    }
  } else {
    try {
      destroy_derived_children(derived3);
      value = update_reaction(derived3);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived3) {
  var value = execute_derived(derived3);
  var status = (skip_reaction || (derived3.f & UNOWNED) !== 0) && derived3.deps !== null ? MAYBE_DIRTY : CLEAN;
  set_signal_status(derived3, status);
  if (!derived3.equals(value)) {
    derived3.v = value;
    derived3.version = increment_version();
  }
}
function destroy_derived(signal) {
  destroy_derived_children(signal);
  remove_reactions(signal, 0);
  set_signal_status(signal, DESTROYED);
  signal.v = signal.children = signal.deps = signal.ctx = signal.reactions = null;
}

// node_modules/svelte/src/internal/client/reactivity/effects.js
function validate_effect(rune) {
  if (active_effect === null && active_reaction === null) {
    effect_orphan(rune);
  }
  if (active_reaction !== null && (active_reaction.f & UNOWNED) !== 0) {
    effect_in_unowned_derived();
  }
  if (is_destroying_effect) {
    effect_in_teardown(rune);
  }
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn, sync, push2 = true) {
  var is_root = (type & ROOT_EFFECT) !== 0;
  var parent_effect = active_effect;
  if (DEV) {
    while (parent_effect !== null && (parent_effect.f & INSPECT_EFFECT) !== 0) {
      parent_effect = parent_effect.parent;
    }
  }
  var effect2 = {
    ctx: component_context,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent: is_root ? null : parent_effect,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (DEV) {
    effect2.component_function = dev_current_component_function;
  }
  if (sync) {
    var previously_flushing_effect = is_flushing_effect;
    try {
      set_is_flushing_effect(true);
      update_effect(effect2);
      effect2.f |= EFFECT_RAN;
    } catch (e) {
      destroy_effect(effect2);
      throw e;
    } finally {
      set_is_flushing_effect(previously_flushing_effect);
    }
  } else if (fn !== null) {
    schedule_effect(effect2);
  }
  var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & EFFECT_HAS_DERIVED) === 0;
  if (!inert && !is_root && push2) {
    if (parent_effect !== null) {
      push_effect(effect2, parent_effect);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
      var derived3 = (
        /** @type {Derived} */
        active_reaction
      );
      (derived3.children ??= []).push(effect2);
    }
  }
  return effect2;
}
function teardown(fn) {
  const effect2 = create_effect(RENDER_EFFECT, null, false);
  set_signal_status(effect2, CLEAN);
  effect2.teardown = fn;
  return effect2;
}
function user_effect(fn) {
  validate_effect("$effect");
  var defer = active_effect !== null && (active_effect.f & BRANCH_EFFECT) !== 0 && component_context !== null && !component_context.m;
  if (DEV) {
    define_property(fn, "name", {
      value: "$effect"
    });
  }
  if (defer) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    (context.e ??= []).push({
      fn,
      effect: active_effect,
      reaction: active_reaction
    });
  } else {
    var signal = effect(fn);
    return signal;
  }
}
function user_pre_effect(fn) {
  validate_effect("$effect.pre");
  if (DEV) {
    define_property(fn, "name", {
      value: "$effect.pre"
    });
  }
  return render_effect(fn);
}
function effect_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return () => {
    destroy_effect(effect2);
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn, false);
}
function legacy_pre_effect(deps, fn) {
  var context = (
    /** @type {ComponentContextLegacy} */
    component_context
  );
  var token = { effect: null, ran: false };
  context.l.r1.push(token);
  token.effect = render_effect(() => {
    deps();
    if (token.ran) return;
    token.ran = true;
    set(context.l.r2, true);
    untrack(fn);
  });
}
function legacy_pre_effect_reset() {
  var context = (
    /** @type {ComponentContextLegacy} */
    component_context
  );
  render_effect(() => {
    if (!get(context.l.r2)) return;
    for (var token of context.l.r1) {
      var effect2 = token.effect;
      if ((effect2.f & CLEAN) !== 0) {
        set_signal_status(effect2, MAYBE_DIRTY);
      }
      if (check_dirtiness(effect2)) {
        update_effect(effect2);
      }
      token.ran = false;
    }
    context.l.r2.v = false;
  });
}
function render_effect(fn) {
  return create_effect(RENDER_EFFECT, fn, true);
}
function template_effect(fn) {
  if (DEV) {
    define_property(fn, "name", {
      value: "{expression}"
    });
  }
  return block(fn);
}
function block(fn, flags = 0) {
  return create_effect(RENDER_EFFECT | BLOCK_EFFECT | flags, fn, true);
}
function branch(fn, push2 = true) {
  return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push2);
}
function execute_effect_teardown(effect2) {
  var teardown2 = effect2.teardown;
  if (teardown2 !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown2.call(null);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_deriveds(signal) {
  var deriveds = signal.deriveds;
  if (deriveds !== null) {
    signal.deriveds = null;
    for (var i = 0; i < deriveds.length; i += 1) {
      destroy_derived(deriveds[i]);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    var next2 = effect2.next;
    destroy_effect(effect2, remove_dom);
    effect2 = next2;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next2 = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next2;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null) {
    var node = effect2.nodes_start;
    var end = effect2.nodes_end;
    while (node !== null) {
      var next2 = node === end ? null : (
        /** @type {TemplateNode} */
        get_next_sibling(node)
      );
      node.remove();
      node = next2;
    }
    removed = true;
  }
  destroy_effect_children(effect2, remove_dom && !removed);
  destroy_effect_deriveds(effect2);
  remove_reactions(effect2, 0);
  set_signal_status(effect2, DESTROYED);
  var transitions = effect2.transitions;
  if (transitions !== null) {
    for (const transition2 of transitions) {
      transition2.stop();
    }
  }
  execute_effect_teardown(effect2);
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  if (DEV) {
    effect2.component_function = null;
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.parent = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
}
function unlink_effect(effect2) {
  var parent = effect2.parent;
  var prev = effect2.prev;
  var next2 = effect2.next;
  if (prev !== null) prev.next = next2;
  if (next2 !== null) next2.prev = prev;
  if (parent !== null) {
    if (parent.first === effect2) parent.first = next2;
    if (parent.last === effect2) parent.last = prev;
  }
}
function pause_effect(effect2, callback) {
  var transitions = [];
  pause_children(effect2, transitions, true);
  run_out_transitions(transitions, () => {
    destroy_effect(effect2);
    if (callback) callback();
  });
}
function run_out_transitions(transitions, fn) {
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition2 of transitions) {
      transition2.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  if (effect2.transitions !== null) {
    for (const transition2 of effect2.transitions) {
      if (transition2.is_global || local) {
        transitions.push(transition2);
      }
    }
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    pause_children(child2, transitions, transparent ? local : false);
    child2 = sibling2;
  }
}
function resume_effect(effect2) {
  resume_children(effect2, true);
}
function resume_children(effect2, local) {
  if ((effect2.f & INERT) === 0) return;
  if (check_dirtiness(effect2)) {
    update_effect(effect2);
  }
  effect2.f ^= INERT;
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    resume_children(child2, transparent ? local : false);
    child2 = sibling2;
  }
  if (effect2.transitions !== null) {
    for (const transition2 of effect2.transitions) {
      if (transition2.is_global || local) {
        transition2.in();
      }
    }
  }
}

// node_modules/svelte/src/internal/client/dom/task.js
var request_idle_callback = typeof requestIdleCallback === "undefined" ? (cb) => setTimeout(cb, 1) : requestIdleCallback;
var is_micro_task_queued = false;
var is_idle_task_queued = false;
var current_queued_micro_tasks = [];
var current_queued_idle_tasks = [];
function process_micro_tasks() {
  is_micro_task_queued = false;
  const tasks = current_queued_micro_tasks.slice();
  current_queued_micro_tasks = [];
  run_all(tasks);
}
function process_idle_tasks() {
  is_idle_task_queued = false;
  const tasks = current_queued_idle_tasks.slice();
  current_queued_idle_tasks = [];
  run_all(tasks);
}
function queue_micro_task(fn) {
  if (!is_micro_task_queued) {
    is_micro_task_queued = true;
    queueMicrotask(process_micro_tasks);
  }
  current_queued_micro_tasks.push(fn);
}
function queue_idle_task(fn) {
  if (!is_idle_task_queued) {
    is_idle_task_queued = true;
    request_idle_callback(process_idle_tasks);
  }
  current_queued_idle_tasks.push(fn);
}
function flush_tasks() {
  if (is_micro_task_queued) {
    process_micro_tasks();
  }
  if (is_idle_task_queued) {
    process_idle_tasks();
  }
}

// node_modules/svelte/src/internal/client/dev/ownership.js
var boundaries = {};
var chrome_pattern = /at (?:.+ \()?(.+):(\d+):(\d+)\)?$/;
var firefox_pattern = /@(.+):(\d+):(\d+)$/;
function get_stack() {
  const stack2 = new Error().stack;
  if (!stack2) return null;
  const entries = [];
  for (const line of stack2.split("\n")) {
    let match = chrome_pattern.exec(line) ?? firefox_pattern.exec(line);
    if (match) {
      entries.push({
        file: match[1],
        line: +match[2],
        column: +match[3]
      });
    }
  }
  return entries;
}
function get_component() {
  const stack2 = get_stack()?.slice(4);
  if (!stack2) return null;
  for (let i = 0; i < stack2.length; i++) {
    const entry = stack2[i];
    const modules = boundaries[entry.file];
    if (!modules) {
      if (i === 0) return null;
      continue;
    }
    for (const module of modules) {
      if (module.end == null) {
        return null;
      }
      if (module.start.line < entry.line && module.end.line > entry.line) {
        return module.component;
      }
    }
  }
  return null;
}
var ADD_OWNER = Symbol("ADD_OWNER");
function add_owner(object, owner, global = false, skip_warning = false) {
  if (object && !global) {
    const component2 = dev_current_component_function;
    const metadata = object[STATE_SYMBOL_METADATA];
    if (metadata && !has_owner(metadata, component2)) {
      let original = get_owner(metadata);
      if (owner[FILENAME] !== component2[FILENAME] && !skip_warning) {
        ownership_invalid_binding(component2[FILENAME], owner[FILENAME], original[FILENAME]);
      }
    }
  }
  add_owner_to_object(object, owner, /* @__PURE__ */ new Set());
}
function widen_ownership(from, to) {
  if (to.owners === null) {
    return;
  }
  while (from) {
    if (from.owners === null) {
      to.owners = null;
      break;
    }
    for (const owner of from.owners) {
      to.owners.add(owner);
    }
    from = from.parent;
  }
}
function add_owner_to_object(object, owner, seen) {
  const metadata = (
    /** @type {ProxyMetadata} */
    object?.[STATE_SYMBOL_METADATA]
  );
  if (metadata) {
    if ("owners" in metadata && metadata.owners != null) {
      metadata.owners.add(owner);
    }
  } else if (object && typeof object === "object") {
    if (seen.has(object)) return;
    seen.add(object);
    if (ADD_OWNER in object && object[ADD_OWNER]) {
      render_effect(() => {
        object[ADD_OWNER](owner);
      });
    } else {
      var proto = get_prototype_of(object);
      if (proto === Object.prototype) {
        for (const key in object) {
          add_owner_to_object(object[key], owner, seen);
        }
      } else if (proto === Array.prototype) {
        for (let i = 0; i < object.length; i += 1) {
          add_owner_to_object(object[i], owner, seen);
        }
      }
    }
  }
}
function has_owner(metadata, component2) {
  if (metadata.owners === null) {
    return true;
  }
  return metadata.owners.has(component2) || metadata.parent !== null && has_owner(metadata.parent, component2);
}
function get_owner(metadata) {
  return metadata?.owners?.values().next().value ?? get_owner(
    /** @type {ProxyMetadata} */
    metadata.parent
  );
}
var skip = false;
function check_ownership(metadata) {
  if (skip) return;
  const component2 = get_component();
  if (component2 && !has_owner(metadata, component2)) {
    let original = get_owner(metadata);
    if (original[FILENAME] !== component2[FILENAME]) {
      ownership_invalid_mutation(component2[FILENAME], original[FILENAME]);
    } else {
      ownership_invalid_mutation();
    }
  }
}

// node_modules/svelte/src/internal/shared/errors.js
function lifecycle_outside_component(name) {
  if (DEV) {
    const error = new Error(`lifecycle_outside_component
\`${name}(...)\` can only be used during component initialisation`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error("lifecycle_outside_component");
  }
}

// node_modules/svelte/src/internal/client/runtime.js
var FLUSH_MICROTASK = 0;
var FLUSH_SYNC = 1;
var handled_errors = /* @__PURE__ */ new WeakSet();
var scheduler_mode = FLUSH_MICROTASK;
var is_micro_task_queued2 = false;
var is_flushing_effect = false;
var is_destroying_effect = false;
function set_is_flushing_effect(value) {
  is_flushing_effect = value;
}
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
var queued_root_effects = [];
var flush_count = 0;
var dev_effect_stack = [];
var active_reaction = null;
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
var active_effect = null;
function set_active_effect(effect2) {
  active_effect = effect2;
}
var derived_sources = null;
function set_derived_sources(sources) {
  derived_sources = sources;
}
var new_deps = null;
var skipped_deps = 0;
var untracked_writes = null;
function set_untracked_writes(value) {
  untracked_writes = value;
}
var current_version = 0;
var skip_reaction = false;
var is_signals_recorded = false;
var captured_signals = /* @__PURE__ */ new Set();
var component_context = null;
var dev_current_component_function = null;
function increment_version() {
  return ++current_version;
}
function is_runes() {
  return !legacy_mode_flag || component_context !== null && component_context.l === null;
}
function check_dirtiness(reaction) {
  var flags = reaction.f;
  if ((flags & DIRTY) !== 0) {
    return true;
  }
  if ((flags & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags & UNOWNED) !== 0;
    if (dependencies !== null) {
      var i;
      if ((flags & DISCONNECTED) !== 0) {
        for (i = 0; i < dependencies.length; i++) {
          (dependencies[i].reactions ??= []).push(reaction);
        }
        reaction.f ^= DISCONNECTED;
      }
      for (i = 0; i < dependencies.length; i++) {
        var dependency = dependencies[i];
        if (check_dirtiness(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (is_unowned && active_effect !== null && !skip_reaction && !dependency?.reactions?.includes(reaction)) {
          (dependency.reactions ??= []).push(reaction);
        }
        if (dependency.version > reaction.version) {
          return true;
        }
      }
    }
    if (!is_unowned) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function handle_error(error, effect2, component_context2) {
  if (!DEV || handled_errors.has(error) || component_context2 === null) {
    throw error;
  }
  const component_stack = [];
  const effect_name = effect2.fn?.name;
  if (effect_name) {
    component_stack.push(effect_name);
  }
  let current_context = component_context2;
  while (current_context !== null) {
    if (DEV) {
      var filename = current_context.function?.[FILENAME];
      if (filename) {
        const file = filename.split("/").pop();
        component_stack.push(file);
      }
    }
    current_context = current_context.p;
  }
  const indent = /Firefox/.test(navigator.userAgent) ? "  " : "	";
  define_property(error, "message", {
    value: error.message + `
${component_stack.map((name) => `
${indent}in ${name}`).join("")}
`
  });
  const stack2 = error.stack;
  if (stack2) {
    const lines = stack2.split("\n");
    const new_lines = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes("svelte/src/internal")) {
        continue;
      }
      new_lines.push(line);
    }
    define_property(error, "stack", {
      value: error.stack + new_lines.join("\n")
    });
  }
  handled_errors.add(error);
  throw error;
}
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var prev_derived_sources = derived_sources;
  var previous_component_context = component_context;
  var flags = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  skip_reaction = !is_flushing_effect && (flags & UNOWNED) !== 0;
  derived_sources = null;
  component_context = reaction.ctx;
  try {
    var result = (
      /** @type {Function} */
      (0, reaction.fn)()
    );
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction) {
        for (i = skipped_deps; i < deps.length; i++) {
          (deps[i].reactions ??= []).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    return result;
  } finally {
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    derived_sources = prev_derived_sources;
    component_context = previous_component_context;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index2 = reactions.indexOf(signal);
    if (index2 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index2] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect2) {
  var flags = effect2.f;
  if ((flags & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  var previous_component_context = component_context;
  active_effect = effect2;
  if (DEV) {
    var previous_component_fn = dev_current_component_function;
    dev_current_component_function = effect2.component_function;
  }
  try {
    if ((flags & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    destroy_effect_deriveds(effect2);
    execute_effect_teardown(effect2);
    var teardown2 = update_reaction(effect2);
    effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
    effect2.version = current_version;
    if (DEV) {
      dev_effect_stack.push(effect2);
    }
  } catch (error) {
    handle_error(
      /** @type {Error} */
      error,
      effect2,
      previous_component_context
    );
  } finally {
    active_effect = previous_effect;
    if (DEV) {
      dev_current_component_function = previous_component_fn;
    }
  }
}
function infinite_loop_guard() {
  if (flush_count > 1e3) {
    flush_count = 0;
    if (DEV) {
      try {
        effect_update_depth_exceeded();
      } catch (error) {
        define_property(error, "stack", {
          value: ""
        });
        console.error(
          "Last ten effects were: ",
          dev_effect_stack.slice(-10).map((d) => d.fn)
        );
        dev_effect_stack = [];
        throw error;
      }
    } else {
      effect_update_depth_exceeded();
    }
  }
  flush_count++;
}
function flush_queued_root_effects(root_effects) {
  var length = root_effects.length;
  if (length === 0) {
    return;
  }
  infinite_loop_guard();
  var previously_flushing_effect = is_flushing_effect;
  is_flushing_effect = true;
  try {
    for (var i = 0; i < length; i++) {
      var effect2 = root_effects[i];
      if ((effect2.f & CLEAN) === 0) {
        effect2.f ^= CLEAN;
      }
      var collected_effects = [];
      process_effects(effect2, collected_effects);
      flush_queued_effects(collected_effects);
    }
  } finally {
    is_flushing_effect = previously_flushing_effect;
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  for (var i = 0; i < length; i++) {
    var effect2 = effects[i];
    if ((effect2.f & (DESTROYED | INERT)) === 0 && check_dirtiness(effect2)) {
      update_effect(effect2);
      if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
        if (effect2.teardown === null) {
          unlink_effect(effect2);
        } else {
          effect2.fn = null;
        }
      }
    }
  }
}
function process_deferred() {
  is_micro_task_queued2 = false;
  if (flush_count > 1001) {
    return;
  }
  const previous_queued_root_effects = queued_root_effects;
  queued_root_effects = [];
  flush_queued_root_effects(previous_queued_root_effects);
  if (!is_micro_task_queued2) {
    flush_count = 0;
    if (DEV) {
      dev_effect_stack = [];
    }
  }
}
function schedule_effect(signal) {
  if (scheduler_mode === FLUSH_MICROTASK) {
    if (!is_micro_task_queued2) {
      is_micro_task_queued2 = true;
      queueMicrotask(process_deferred);
    }
  }
  var effect2 = signal;
  while (effect2.parent !== null) {
    effect2 = effect2.parent;
    var flags = effect2.f;
    if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags & CLEAN) === 0) return;
      effect2.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect2);
}
function process_effects(effect2, collected_effects) {
  var current_effect = effect2.first;
  var effects = [];
  main_loop: while (current_effect !== null) {
    var flags = current_effect.f;
    var is_branch = (flags & BRANCH_EFFECT) !== 0;
    var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
    if (!is_skippable_branch && (flags & INERT) === 0) {
      if ((flags & RENDER_EFFECT) !== 0) {
        if (is_branch) {
          current_effect.f ^= CLEAN;
        } else if (check_dirtiness(current_effect)) {
          update_effect(current_effect);
        }
        var child2 = current_effect.first;
        if (child2 !== null) {
          current_effect = child2;
          continue;
        }
      } else if ((flags & EFFECT) !== 0) {
        effects.push(current_effect);
      }
    }
    var sibling2 = current_effect.next;
    if (sibling2 === null) {
      let parent = current_effect.parent;
      while (parent !== null) {
        if (effect2 === parent) {
          break main_loop;
        }
        var parent_sibling = parent.next;
        if (parent_sibling !== null) {
          current_effect = parent_sibling;
          continue main_loop;
        }
        parent = parent.parent;
      }
    }
    current_effect = sibling2;
  }
  for (var i = 0; i < effects.length; i++) {
    child2 = effects[i];
    collected_effects.push(child2);
    process_effects(child2, collected_effects);
  }
}
function flush_sync(fn) {
  var previous_scheduler_mode = scheduler_mode;
  var previous_queued_root_effects = queued_root_effects;
  try {
    infinite_loop_guard();
    const root_effects = [];
    scheduler_mode = FLUSH_SYNC;
    queued_root_effects = root_effects;
    is_micro_task_queued2 = false;
    flush_queued_root_effects(previous_queued_root_effects);
    var result = fn?.();
    flush_tasks();
    if (queued_root_effects.length > 0 || root_effects.length > 0) {
      flush_sync();
    }
    flush_count = 0;
    if (DEV) {
      dev_effect_stack = [];
    }
    return result;
  } finally {
    scheduler_mode = previous_scheduler_mode;
    queued_root_effects = previous_queued_root_effects;
  }
}
function get(signal) {
  var flags = signal.f;
  var is_derived = (flags & DERIVED) !== 0;
  if (is_derived && (flags & DESTROYED) !== 0) {
    var value = execute_derived(
      /** @type {Derived} */
      signal
    );
    destroy_derived(
      /** @type {Derived} */
      signal
    );
    return value;
  }
  if (is_signals_recorded) {
    captured_signals.add(signal);
  }
  if (active_reaction !== null) {
    if (derived_sources !== null && derived_sources.includes(signal)) {
      state_unsafe_local_read();
    }
    var deps = active_reaction.deps;
    if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
      skipped_deps++;
    } else if (new_deps === null) {
      new_deps = [signal];
    } else {
      new_deps.push(signal);
    }
    if (untracked_writes !== null && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & BRANCH_EFFECT) === 0 && untracked_writes.includes(signal)) {
      set_signal_status(active_effect, DIRTY);
      schedule_effect(active_effect);
    }
  } else if (is_derived && /** @type {Derived} */
  signal.deps === null) {
    var derived3 = (
      /** @type {Derived} */
      signal
    );
    var parent = derived3.parent;
    if (parent !== null && !parent.deriveds?.includes(derived3)) {
      (parent.deriveds ??= []).push(derived3);
    }
  }
  if (is_derived) {
    derived3 = /** @type {Derived} */
    signal;
    if (check_dirtiness(derived3)) {
      update_derived(derived3);
    }
  }
  return signal.v;
}
function untrack(fn) {
  const previous_reaction = active_reaction;
  try {
    active_reaction = null;
    return fn();
  } finally {
    active_reaction = previous_reaction;
  }
}
var STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
function getContext(key) {
  const context_map = get_or_init_context_map("getContext");
  const result = (
    /** @type {T} */
    context_map.get(key)
  );
  if (DEV) {
    const fn = (
      /** @type {ComponentContext} */
      component_context.function
    );
    if (fn) {
      add_owner(result, fn, true);
    }
  }
  return result;
}
function setContext(key, context) {
  const context_map = get_or_init_context_map("setContext");
  context_map.set(key, context);
  return context;
}
function get_or_init_context_map(name) {
  if (component_context === null) {
    lifecycle_outside_component(name);
  }
  return component_context.c ??= new Map(get_parent_context(component_context) || void 0);
}
function get_parent_context(component_context2) {
  let parent = component_context2.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
function push(props, runes = false, fn) {
  component_context = {
    p: component_context,
    c: null,
    e: null,
    m: false,
    s: props,
    x: null,
    l: null
  };
  if (legacy_mode_flag && !runes) {
    component_context.l = {
      s: null,
      u: null,
      r1: [],
      r2: source(false)
    };
  }
  if (DEV) {
    component_context.function = fn;
    dev_current_component_function = fn;
  }
}
function pop(component2) {
  const context_stack_item = component_context;
  if (context_stack_item !== null) {
    if (component2 !== void 0) {
      context_stack_item.x = component2;
    }
    const component_effects = context_stack_item.e;
    if (component_effects !== null) {
      var previous_effect = active_effect;
      var previous_reaction = active_reaction;
      context_stack_item.e = null;
      try {
        for (var i = 0; i < component_effects.length; i++) {
          var component_effect = component_effects[i];
          set_active_effect(component_effect.effect);
          set_active_reaction(component_effect.reaction);
          effect(component_effect.fn);
        }
      } finally {
        set_active_effect(previous_effect);
        set_active_reaction(previous_reaction);
      }
    }
    component_context = context_stack_item.p;
    if (DEV) {
      dev_current_component_function = context_stack_item.p?.function ?? null;
    }
    context_stack_item.m = true;
  }
  return component2 || /** @type {T} */
  {};
}
function deep_read_state(value) {
  if (typeof value !== "object" || !value || value instanceof EventTarget) {
    return;
  }
  if (STATE_SYMBOL in value) {
    deep_read(value);
  } else if (!Array.isArray(value)) {
    for (let key in value) {
      const prop2 = value[key];
      if (typeof prop2 === "object" && prop2 && STATE_SYMBOL in prop2) {
        deep_read(prop2);
      }
    }
  }
}
function deep_read(value, visited = /* @__PURE__ */ new Set()) {
  if (typeof value === "object" && value !== null && // We don't want to traverse DOM elements
  !(value instanceof EventTarget) && !visited.has(value)) {
    visited.add(value);
    if (value instanceof Date) {
      value.getTime();
    }
    for (let key in value) {
      try {
        deep_read(value[key], visited);
      } catch (e) {
      }
    }
    const proto = get_prototype_of(value);
    if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
      const descriptors = get_descriptors(proto);
      for (let key in descriptors) {
        const get3 = descriptors[key].get;
        if (get3) {
          try {
            get3.call(value);
          } catch (e) {
          }
        }
      }
    }
  }
}
if (DEV) {
  let throw_rune_error = function(rune) {
    if (!(rune in globalThis)) {
      let value;
      Object.defineProperty(globalThis, rune, {
        configurable: true,
        // eslint-disable-next-line getter-return
        get: () => {
          if (value !== void 0) {
            return value;
          }
          rune_outside_svelte(rune);
        },
        set: (v) => {
          value = v;
        }
      });
    }
  };
  throw_rune_error("$state");
  throw_rune_error("$effect");
  throw_rune_error("$derived");
  throw_rune_error("$inspect");
  throw_rune_error("$props");
  throw_rune_error("$bindable");
}

// node_modules/svelte/src/internal/client/proxy.js
function proxy(value, parent = null, prev) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = source(0);
  if (is_proxied_array) {
    sources.set("length", source(
      /** @type {any[]} */
      value.length
    ));
  }
  var metadata;
  if (DEV) {
    metadata = {
      parent,
      owners: null
    };
    if (prev) {
      const prev_owners = prev.v?.[STATE_SYMBOL_METADATA]?.owners;
      metadata.owners = prev_owners ? new Set(prev_owners) : null;
    } else {
      metadata.owners = parent === null ? component_context !== null ? /* @__PURE__ */ new Set([component_context.function]) : null : /* @__PURE__ */ new Set();
    }
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_, prop2, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s = sources.get(prop2);
        if (s === void 0) {
          s = source(descriptor.value);
          sources.set(prop2, s);
        } else {
          set(s, proxy(descriptor.value, metadata));
        }
        return true;
      },
      deleteProperty(target, prop2) {
        var s = sources.get(prop2);
        if (s === void 0) {
          if (prop2 in target) {
            sources.set(prop2, source(UNINITIALIZED));
          }
        } else {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n < ls.v) {
              set(ls, n);
            }
          }
          set(s, UNINITIALIZED);
          update_version(version);
        }
        return true;
      },
      get(target, prop2, receiver) {
        if (DEV && prop2 === STATE_SYMBOL_METADATA) {
          return metadata;
        }
        if (prop2 === STATE_SYMBOL) {
          return value;
        }
        var s = sources.get(prop2);
        var exists = prop2 in target;
        if (s === void 0 && (!exists || get_descriptor(target, prop2)?.writable)) {
          s = source(proxy(exists ? target[prop2] : UNINITIALIZED, metadata));
          sources.set(prop2, s);
        }
        if (s !== void 0) {
          var v = get(s);
          if (DEV) {
            var prop_metadata = v?.[STATE_SYMBOL_METADATA];
            if (prop_metadata && prop_metadata?.parent !== metadata) {
              widen_ownership(metadata, prop_metadata);
            }
          }
          return v === UNINITIALIZED ? void 0 : v;
        }
        return Reflect.get(target, prop2, receiver);
      },
      getOwnPropertyDescriptor(target, prop2) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor && "value" in descriptor) {
          var s = sources.get(prop2);
          if (s) descriptor.value = get(s);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop2);
          var value2 = source2?.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop2) {
        if (DEV && prop2 === STATE_SYMBOL_METADATA) {
          return true;
        }
        if (prop2 === STATE_SYMBOL) {
          return true;
        }
        var s = sources.get(prop2);
        var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
        if (s !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop2)?.writable)) {
          if (s === void 0) {
            s = source(has ? proxy(target[prop2], metadata) : UNINITIALIZED);
            sources.set(prop2, s);
          }
          var value2 = get(s);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop2, value2, receiver) {
        var s = sources.get(prop2);
        var has = prop2 in target;
        if (is_proxied_array && prop2 === "length") {
          for (var i = value2; i < /** @type {Source<number>} */
          s.v; i += 1) {
            var other_s = sources.get(i + "");
            if (other_s !== void 0) {
              set(other_s, UNINITIALIZED);
            } else if (i in target) {
              other_s = source(UNINITIALIZED);
              sources.set(i + "", other_s);
            }
          }
        }
        if (s === void 0) {
          if (!has || get_descriptor(target, prop2)?.writable) {
            s = source(void 0);
            set(s, proxy(value2, metadata));
            sources.set(prop2, s);
          }
        } else {
          has = s.v !== UNINITIALIZED;
          set(s, proxy(value2, metadata));
        }
        if (DEV) {
          var prop_metadata = value2?.[STATE_SYMBOL_METADATA];
          if (prop_metadata && prop_metadata?.parent !== metadata) {
            widen_ownership(metadata, prop_metadata);
          }
          check_ownership(metadata);
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor?.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n >= ls.v) {
              set(ls, n + 1);
            }
          }
          update_version(version);
        }
        return true;
      },
      ownKeys(target) {
        get(version);
        var own_keys = Reflect.ownKeys(target).filter((key2) => {
          var source3 = sources.get(key2);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key in target)) {
            own_keys.push(key);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function update_version(signal, d = 1) {
  set(signal, signal.v + d);
}
function get_proxied_value(value) {
  if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
    return value[STATE_SYMBOL];
  }
  return value;
}

// node_modules/svelte/src/internal/client/dev/equality.js
function init_array_prototype_warnings() {
  const array_prototype2 = Array.prototype;
  const cleanup = Array.__svelte_cleanup;
  if (cleanup) {
    cleanup();
  }
  const { indexOf, lastIndexOf, includes } = array_prototype2;
  array_prototype2.indexOf = function(item2, from_index) {
    const index2 = indexOf.call(this, item2, from_index);
    if (index2 === -1) {
      const test = indexOf.call(get_proxied_value(this), get_proxied_value(item2), from_index);
      if (test !== -1) {
        state_proxy_equality_mismatch("array.indexOf(...)");
      }
    }
    return index2;
  };
  array_prototype2.lastIndexOf = function(item2, from_index) {
    const index2 = lastIndexOf.call(this, item2, from_index ?? this.length - 1);
    if (index2 === -1) {
      const test = lastIndexOf.call(
        get_proxied_value(this),
        get_proxied_value(item2),
        from_index ?? this.length - 1
      );
      if (test !== -1) {
        state_proxy_equality_mismatch("array.lastIndexOf(...)");
      }
    }
    return index2;
  };
  array_prototype2.includes = function(item2, from_index) {
    const has = includes.call(this, item2, from_index);
    if (!has) {
      const test = includes.call(get_proxied_value(this), get_proxied_value(item2), from_index);
      if (test) {
        state_proxy_equality_mismatch("array.includes(...)");
      }
    }
    return has;
  };
  Array.__svelte_cleanup = () => {
    array_prototype2.indexOf = indexOf;
    array_prototype2.lastIndexOf = lastIndexOf;
    array_prototype2.includes = includes;
  };
}

// node_modules/svelte/src/internal/client/dom/operations.js
var $window;
var $document;
var first_child_getter;
var next_sibling_getter;
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  $document = document;
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  element_prototype.__click = void 0;
  element_prototype.__className = "";
  element_prototype.__attributes = null;
  element_prototype.__styles = null;
  element_prototype.__e = void 0;
  Text.prototype.__t = void 0;
  if (DEV) {
    element_prototype.__svelte_meta = null;
    init_array_prototype_warnings();
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
function child(node, is_text) {
  if (!hydrating) {
    return /* @__PURE__ */ get_first_child(node);
  }
  var child2 = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ get_first_child(hydrate_node)
  );
  if (child2 === null) {
    child2 = hydrate_node.appendChild(create_text());
  } else if (is_text && child2.nodeType !== 3) {
    var text2 = create_text();
    child2?.before(text2);
    set_hydrate_node(text2);
    return text2;
  }
  set_hydrate_node(child2);
  return child2;
}
function first_child(fragment, is_text) {
  if (!hydrating) {
    var first = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ get_first_child(
        /** @type {Node} */
        fragment
      )
    );
    if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
    return first;
  }
  if (is_text && hydrate_node?.nodeType !== 3) {
    var text2 = create_text();
    hydrate_node?.before(text2);
    set_hydrate_node(text2);
    return text2;
  }
  return hydrate_node;
}
function sibling(node, count = 1, is_text = false) {
  let next_sibling = hydrating ? hydrate_node : node;
  while (count--) {
    next_sibling = /** @type {TemplateNode} */
    /* @__PURE__ */ get_next_sibling(next_sibling);
  }
  if (!hydrating) {
    return next_sibling;
  }
  var type = next_sibling.nodeType;
  if (is_text && type !== 3) {
    var text2 = create_text();
    next_sibling?.before(text2);
    set_hydrate_node(text2);
    return text2;
  }
  set_hydrate_node(next_sibling);
  return (
    /** @type {TemplateNode} */
    next_sibling
  );
}
function clear_text_content(node) {
  node.textContent = "";
}

// node_modules/svelte/src/internal/client/dom/hydration.js
var hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
var hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(
    /** @type {TemplateNode} */
    get_next_sibling(hydrate_node)
  );
}
function reset(node) {
  if (!hydrating) return;
  if (get_next_sibling(hydrate_node) !== null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  hydrate_node = node;
}
function next(count = 1) {
  if (hydrating) {
    var i = count;
    var node = hydrate_node;
    while (i--) {
      node = /** @type {TemplateNode} */
      get_next_sibling(node);
    }
    hydrate_node = node;
  }
}
function remove_nodes() {
  var depth = 0;
  var node = hydrate_node;
  while (true) {
    if (node.nodeType === 8) {
      var data = (
        /** @type {Comment} */
        node.data
      );
      if (data === HYDRATION_END) {
        if (depth === 0) return node;
        depth -= 1;
      } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE) {
        depth += 1;
      }
    }
    var next2 = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    node.remove();
    node = next2;
  }
}

// node_modules/svelte/src/internal/client/dom/elements/misc.js
function remove_textarea_child(dom) {
  if (hydrating && get_first_child(dom) !== null) {
    clear_text_content(dom);
  }
}
var listening_to_form_reset = false;
function add_form_reset_listener() {
  if (!listening_to_form_reset) {
    listening_to_form_reset = true;
    document.addEventListener(
      "reset",
      (evt) => {
        Promise.resolve().then(() => {
          if (!evt.defaultPrevented) {
            for (
              const e of
              /**@type {HTMLFormElement} */
              evt.target.elements
            ) {
              e.__on_r?.();
            }
          }
        });
      },
      // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
      { capture: true }
    );
  }
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function without_reactive_context(fn) {
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    return fn();
  } finally {
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}

// node_modules/svelte/src/internal/client/dom/elements/events.js
var all_registered_events = /* @__PURE__ */ new Set();
var root_event_handles = /* @__PURE__ */ new Set();
function create_event(event_name, dom, handler, options) {
  function target_handler(event2) {
    if (!options.capture) {
      handle_event_propagation.call(dom, event2);
    }
    if (!event2.cancelBubble) {
      return without_reactive_context(() => {
        return handler.call(this, event2);
      });
    }
  }
  if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
    queue_micro_task(() => {
      dom.addEventListener(event_name, target_handler, options);
    });
  } else {
    dom.addEventListener(event_name, target_handler, options);
  }
  return target_handler;
}
function event(event_name, dom, handler, capture, passive2) {
  var options = { capture, passive: passive2 };
  var target_handler = create_event(event_name, dom, handler, options);
  if (dom === document.body || dom === window || dom === document) {
    teardown(() => {
      dom.removeEventListener(event_name, target_handler, options);
    });
  }
}
function handle_event_propagation(event2) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event2.type;
  var path = event2.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event2.target
  );
  var path_idx = 0;
  var handled_at = event2.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event2.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event2.target;
  if (current_target === handler_element) return;
  define_property(event2, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated !== void 0 && !/** @type {any} */
        current_target.disabled) {
          if (is_array(delegated)) {
            var [fn, ...data] = delegated;
            fn.apply(current_target, [event2, ...data]);
          } else {
            delegated.call(current_target, event2);
          }
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error of other_errors) {
        queueMicrotask(() => {
          throw error;
        });
      }
      throw throw_error;
    }
  } finally {
    event2.__root = handler_element;
    delete event2.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
var head_anchor;
function reset_head_anchor() {
  head_anchor = void 0;
}

// node_modules/svelte/src/internal/client/dom/reconciler.js
function create_fragment_from_html(html2) {
  var elem = document.createElement("template");
  elem.innerHTML = html2;
  return elem.content;
}

// node_modules/svelte/src/internal/client/dom/template.js
function assign_nodes(start, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes_start === null) {
    effect2.nodes_start = start;
    effect2.nodes_end = end;
  }
}
// @__NO_SIDE_EFFECTS__
function template(content, flags) {
  var is_fragment = (flags & TEMPLATE_FRAGMENT) !== 0;
  var use_import_node = (flags & TEMPLATE_USE_IMPORT_NODE) !== 0;
  var node;
  var has_start = !content.startsWith("<!>");
  return () => {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    if (node === void 0) {
      node = create_fragment_from_html(has_start ? content : "<!>" + content);
      if (!is_fragment) node = /** @type {Node} */
      get_first_child(node);
    }
    var clone = (
      /** @type {TemplateNode} */
      use_import_node ? document.importNode(node, true) : node.cloneNode(true)
    );
    if (is_fragment) {
      var start = (
        /** @type {TemplateNode} */
        get_first_child(clone)
      );
      var end = (
        /** @type {TemplateNode} */
        clone.lastChild
      );
      assign_nodes(start, end);
    } else {
      assign_nodes(clone, clone);
    }
    return clone;
  };
}
function comment() {
  if (hydrating) {
    assign_nodes(hydrate_node, null);
    return hydrate_node;
  }
  var frag = document.createDocumentFragment();
  var start = document.createComment("");
  var anchor = create_text();
  frag.append(start, anchor);
  assign_nodes(start, anchor);
  return frag;
}
function append(anchor, dom) {
  if (hydrating) {
    active_effect.nodes_end = hydrate_node;
    hydrate_next();
    return;
  }
  if (anchor === null) {
    return;
  }
  anchor.before(
    /** @type {Node} */
    dom
  );
}

// node_modules/svelte/src/utils.js
var regex_return_characters = /\r/g;
function hash(str) {
  str = str.replace(regex_return_characters, "");
  let hash2 = 5381;
  let i = str.length;
  while (i--) hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
  return (hash2 >>> 0).toString(36);
}
var DOM_BOOLEAN_ATTRIBUTES = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected",
  "webkitdirectory"
];
var DOM_PROPERTIES = [
  ...DOM_BOOLEAN_ATTRIBUTES,
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  "readOnly",
  "value",
  "inert",
  "volume"
];
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}

// node_modules/svelte/src/internal/client/render.js
var should_intro = true;
function set_text(text2, value) {
  var str = value == null ? "" : typeof value === "object" ? value + "" : value;
  if (str !== (text2.__t ??= text2.nodeValue)) {
    text2.__t = str;
    text2.nodeValue = str == null ? "" : str + "";
  }
}
function mount(component2, options) {
  return _mount(component2, options);
}
function hydrate(component2, options) {
  init_operations();
  options.intro = options.intro ?? false;
  const target = options.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== 8 || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    hydrate_next();
    const instance = _mount(component2, { ...options, anchor });
    if (hydrate_node === null || hydrate_node.nodeType !== 8 || /** @type {Comment} */
    hydrate_node.data !== HYDRATION_END) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error) {
    if (error === HYDRATION_ERROR) {
      if (options.recover === false) {
        hydration_failed();
      }
      init_operations();
      clear_text_content(target);
      set_hydrating(false);
      return mount(component2, options);
    }
    throw error;
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
    reset_head_anchor();
  }
}
var document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = (events2) => {
    for (var i = 0; i < events2.length; i++) {
      var event_name = events2[i];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive2 = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
      var n = document_listeners.get(event_name);
      if (n === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n + 1);
      }
    }
  };
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component2 = void 0;
  var unmount2 = effect_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    branch(() => {
      if (context) {
        push({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        ctx.c = context;
      }
      if (events) {
        props.$$events = events;
      }
      if (hydrating) {
        assign_nodes(
          /** @type {TemplateNode} */
          anchor_node,
          null
        );
      }
      should_intro = intro;
      component2 = Component(anchor_node, props) || {};
      should_intro = true;
      if (hydrating) {
        active_effect.nodes_end = hydrate_node;
      }
      if (context) {
        pop();
      }
    });
    return () => {
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n);
        }
      }
      root_event_handles.delete(event_handle);
      mounted_components.delete(component2);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component2, unmount2);
  return component2;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component2) {
  const fn = mounted_components.get(component2);
  if (fn) {
    fn();
  } else if (DEV) {
    lifecycle_double_unmount();
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/if.js
function if_block(node, get_condition, consequent_fn, alternate_fn = null, elseif = false) {
  if (hydrating) {
    hydrate_next();
  }
  var anchor = node;
  var consequent_effect = null;
  var alternate_effect = null;
  var condition = null;
  var flags = elseif ? EFFECT_TRANSPARENT : 0;
  block(() => {
    if (condition === (condition = !!get_condition())) return;
    let mismatch = false;
    if (hydrating) {
      const is_else = (
        /** @type {Comment} */
        anchor.data === HYDRATION_START_ELSE
      );
      if (condition === is_else) {
        anchor = remove_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
      }
    }
    if (condition) {
      if (consequent_effect) {
        resume_effect(consequent_effect);
      } else {
        consequent_effect = branch(() => consequent_fn(anchor));
      }
      if (alternate_effect) {
        pause_effect(alternate_effect, () => {
          alternate_effect = null;
        });
      }
    } else {
      if (alternate_effect) {
        resume_effect(alternate_effect);
      } else if (alternate_fn) {
        alternate_effect = branch(() => alternate_fn(anchor));
      }
      if (consequent_effect) {
        pause_effect(consequent_effect, () => {
          consequent_effect = null;
        });
      }
    }
    if (mismatch) {
      set_hydrating(true);
    }
  }, flags);
  if (hydrating) {
    anchor = hydrate_node;
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/each.js
var current_each_item = null;
function index(_, i) {
  return i;
}
function pause_effects(state2, items, controlled_anchor, items_map) {
  var transitions = [];
  var length = items.length;
  for (var i = 0; i < length; i++) {
    pause_children(items[i].e, transitions, true);
  }
  var is_controlled = length > 0 && transitions.length === 0 && controlled_anchor !== null;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      /** @type {Element} */
      controlled_anchor.parentNode
    );
    clear_text_content(parent_node);
    parent_node.append(
      /** @type {Element} */
      controlled_anchor
    );
    items_map.clear();
    link(state2, items[0].prev, items[length - 1].next);
  }
  run_out_transitions(transitions, () => {
    for (var i2 = 0; i2 < length; i2++) {
      var item2 = items[i2];
      if (!is_controlled) {
        items_map.delete(item2.k);
        link(state2, item2.prev, item2.next);
      }
      destroy_effect(item2.e, !is_controlled);
    }
  });
}
function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
  var anchor = node;
  var state2 = { flags, items: /* @__PURE__ */ new Map(), first: null };
  var is_controlled = (flags & EACH_IS_CONTROLLED) !== 0;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    anchor = hydrating ? set_hydrate_node(
      /** @type {Comment | Text} */
      get_first_child(parent_node)
    ) : parent_node.appendChild(create_text());
  }
  if (hydrating) {
    hydrate_next();
  }
  var fallback2 = null;
  var was_empty = false;
  block(() => {
    var collection = get_collection();
    var array = is_array(collection) ? collection : collection == null ? [] : array_from(collection);
    var length = array.length;
    if (was_empty && length === 0) {
      return;
    }
    was_empty = length === 0;
    let mismatch = false;
    if (hydrating) {
      var is_else = (
        /** @type {Comment} */
        anchor.data === HYDRATION_START_ELSE
      );
      if (is_else !== (length === 0)) {
        anchor = remove_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
      }
    }
    if (hydrating) {
      var prev = null;
      var item2;
      for (var i = 0; i < length; i++) {
        if (hydrate_node.nodeType === 8 && /** @type {Comment} */
        hydrate_node.data === HYDRATION_END) {
          anchor = /** @type {Comment} */
          hydrate_node;
          mismatch = true;
          set_hydrating(false);
          break;
        }
        var value = array[i];
        var key = get_key(value, i);
        item2 = create_item(hydrate_node, state2, prev, null, value, key, i, render_fn, flags);
        state2.items.set(key, item2);
        prev = item2;
      }
      if (length > 0) {
        set_hydrate_node(remove_nodes());
      }
    }
    if (!hydrating) {
      var effect2 = (
        /** @type {Effect} */
        active_reaction
      );
      reconcile(array, state2, anchor, render_fn, flags, (effect2.f & INERT) !== 0, get_key);
    }
    if (fallback_fn !== null) {
      if (length === 0) {
        if (fallback2) {
          resume_effect(fallback2);
        } else {
          fallback2 = branch(() => fallback_fn(anchor));
        }
      } else if (fallback2 !== null) {
        pause_effect(fallback2, () => {
          fallback2 = null;
        });
      }
    }
    if (mismatch) {
      set_hydrating(true);
    }
    get_collection();
  });
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function reconcile(array, state2, anchor, render_fn, flags, is_inert, get_key) {
  var is_animated = (flags & EACH_IS_ANIMATED) !== 0;
  var should_update = (flags & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0;
  var length = array.length;
  var items = state2.items;
  var first = state2.first;
  var current = first;
  var seen;
  var prev = null;
  var to_animate;
  var matched = [];
  var stashed = [];
  var value;
  var key;
  var item2;
  var i;
  if (is_animated) {
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);
      item2 = items.get(key);
      if (item2 !== void 0) {
        item2.a?.measure();
        (to_animate ??= /* @__PURE__ */ new Set()).add(item2);
      }
    }
  }
  for (i = 0; i < length; i += 1) {
    value = array[i];
    key = get_key(value, i);
    item2 = items.get(key);
    if (item2 === void 0) {
      var child_anchor = current ? (
        /** @type {TemplateNode} */
        current.e.nodes_start
      ) : anchor;
      prev = create_item(
        child_anchor,
        state2,
        prev,
        prev === null ? state2.first : prev.next,
        value,
        key,
        i,
        render_fn,
        flags
      );
      items.set(key, prev);
      matched = [];
      stashed = [];
      current = prev.next;
      continue;
    }
    if (should_update) {
      update_item(item2, value, i, flags);
    }
    if ((item2.e.f & INERT) !== 0) {
      resume_effect(item2.e);
      if (is_animated) {
        item2.a?.unfix();
        (to_animate ??= /* @__PURE__ */ new Set()).delete(item2);
      }
    }
    if (item2 !== current) {
      if (seen !== void 0 && seen.has(item2)) {
        if (matched.length < stashed.length) {
          var start = stashed[0];
          var j;
          prev = start.prev;
          var a = matched[0];
          var b = matched[matched.length - 1];
          for (j = 0; j < matched.length; j += 1) {
            move(matched[j], start, anchor);
          }
          for (j = 0; j < stashed.length; j += 1) {
            seen.delete(stashed[j]);
          }
          link(state2, a.prev, b.next);
          link(state2, prev, a);
          link(state2, b, start);
          current = start;
          prev = b;
          i -= 1;
          matched = [];
          stashed = [];
        } else {
          seen.delete(item2);
          move(item2, current, anchor);
          link(state2, item2.prev, item2.next);
          link(state2, item2, prev === null ? state2.first : prev.next);
          link(state2, prev, item2);
          prev = item2;
        }
        continue;
      }
      matched = [];
      stashed = [];
      while (current !== null && current.k !== key) {
        if (is_inert || (current.e.f & INERT) === 0) {
          (seen ??= /* @__PURE__ */ new Set()).add(current);
        }
        stashed.push(current);
        current = current.next;
      }
      if (current === null) {
        continue;
      }
      item2 = current;
    }
    matched.push(item2);
    prev = item2;
    current = item2.next;
  }
  if (current !== null || seen !== void 0) {
    var to_destroy = seen === void 0 ? [] : array_from(seen);
    while (current !== null) {
      if (is_inert || (current.e.f & INERT) === 0) {
        to_destroy.push(current);
      }
      current = current.next;
    }
    var destroy_length = to_destroy.length;
    if (destroy_length > 0) {
      var controlled_anchor = (flags & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
      if (is_animated) {
        for (i = 0; i < destroy_length; i += 1) {
          to_destroy[i].a?.measure();
        }
        for (i = 0; i < destroy_length; i += 1) {
          to_destroy[i].a?.fix();
        }
      }
      pause_effects(state2, to_destroy, controlled_anchor, items);
    }
  }
  if (is_animated) {
    queue_micro_task(() => {
      if (to_animate === void 0) return;
      for (item2 of to_animate) {
        item2.a?.apply();
      }
    });
  }
  active_effect.first = state2.first && state2.first.e;
  active_effect.last = prev && prev.e;
}
function update_item(item2, value, index2, type) {
  if ((type & EACH_ITEM_REACTIVE) !== 0) {
    internal_set(item2.v, value);
  }
  if ((type & EACH_INDEX_REACTIVE) !== 0) {
    internal_set(
      /** @type {Value<number>} */
      item2.i,
      index2
    );
  } else {
    item2.i = index2;
  }
}
function create_item(anchor, state2, prev, next2, value, key, index2, render_fn, flags) {
  var previous_each_item = current_each_item;
  var reactive = (flags & EACH_ITEM_REACTIVE) !== 0;
  var mutable = (flags & EACH_ITEM_IMMUTABLE) === 0;
  var v = reactive ? mutable ? mutable_source(value) : source(value) : value;
  var i = (flags & EACH_INDEX_REACTIVE) === 0 ? index2 : source(index2);
  var item2 = {
    i,
    v,
    k: key,
    a: null,
    // @ts-expect-error
    e: null,
    prev,
    next: next2
  };
  current_each_item = item2;
  try {
    item2.e = branch(() => render_fn(anchor, v, i), hydrating);
    item2.e.prev = prev && prev.e;
    item2.e.next = next2 && next2.e;
    if (prev === null) {
      state2.first = item2;
    } else {
      prev.next = item2;
      prev.e.next = item2.e;
    }
    if (next2 !== null) {
      next2.prev = item2;
      next2.e.prev = item2.e;
    }
    return item2;
  } finally {
    current_each_item = previous_each_item;
  }
}
function move(item2, next2, anchor) {
  var end = item2.next ? (
    /** @type {TemplateNode} */
    item2.next.e.nodes_start
  ) : anchor;
  var dest = next2 ? (
    /** @type {TemplateNode} */
    next2.e.nodes_start
  ) : anchor;
  var node = (
    /** @type {TemplateNode} */
    item2.e.nodes_start
  );
  while (node !== end) {
    var next_node = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    dest.before(node);
    node = next_node;
  }
}
function link(state2, prev, next2) {
  if (prev === null) {
    state2.first = next2;
  } else {
    prev.next = next2;
    prev.e.next = next2 && next2.e;
  }
  if (next2 !== null) {
    next2.prev = prev;
    next2.e.prev = prev && prev.e;
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/html.js
function check_hash(element2, server_hash, value) {
  if (!server_hash || server_hash === hash(String(value ?? ""))) return;
  let location;
  const loc = element2.__svelte_meta?.loc;
  if (loc) {
    location = `near ${loc.file}:${loc.line}:${loc.column}`;
  } else if (dev_current_component_function?.[FILENAME]) {
    location = `in ${dev_current_component_function[FILENAME]}`;
  }
  hydration_html_changed(
    location?.replace(/\//g, "/\u200B")
    // prevent devtools trying to make it a clickable link by inserting a zero-width space
  );
}
function html(node, get_value, svg, mathml, skip_warning) {
  var anchor = node;
  var value = "";
  var effect2;
  block(() => {
    if (value === (value = get_value() ?? "")) {
      if (hydrating) {
        hydrate_next();
      }
      return;
    }
    if (effect2 !== void 0) {
      destroy_effect(effect2);
      effect2 = void 0;
    }
    if (value === "") return;
    effect2 = branch(() => {
      if (hydrating) {
        var hash2 = (
          /** @type {Comment} */
          hydrate_node.data
        );
        var next2 = hydrate_next();
        var last = next2;
        while (next2 !== null && (next2.nodeType !== 8 || /** @type {Comment} */
        next2.data !== "")) {
          last = next2;
          next2 = /** @type {TemplateNode} */
          get_next_sibling(next2);
        }
        if (next2 === null) {
          hydration_mismatch();
          throw HYDRATION_ERROR;
        }
        if (DEV && !skip_warning) {
          check_hash(
            /** @type {Element} */
            next2.parentNode,
            hash2,
            value
          );
        }
        assign_nodes(hydrate_node, last);
        anchor = set_hydrate_node(next2);
        return;
      }
      var html2 = value + "";
      if (svg) html2 = `<svg>${html2}</svg>`;
      else if (mathml) html2 = `<math>${html2}</math>`;
      var node2 = create_fragment_from_html(html2);
      if (svg || mathml) {
        node2 = /** @type {Element} */
        get_first_child(node2);
      }
      assign_nodes(
        /** @type {TemplateNode} */
        get_first_child(node2),
        /** @type {TemplateNode} */
        node2.lastChild
      );
      if (svg || mathml) {
        while (get_first_child(node2)) {
          anchor.before(
            /** @type {Node} */
            get_first_child(node2)
          );
        }
      } else {
        anchor.before(node2);
      }
    });
  });
}

// node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
function component(node, get_component2, render_fn) {
  if (hydrating) {
    hydrate_next();
  }
  var anchor = node;
  var component2;
  var effect2;
  block(() => {
    if (component2 === (component2 = get_component2())) return;
    if (effect2) {
      pause_effect(effect2);
      effect2 = null;
    }
    if (component2) {
      effect2 = branch(() => render_fn(anchor, component2));
    }
  }, EFFECT_TRANSPARENT);
  if (hydrating) {
    anchor = hydrate_node;
  }
}

// node_modules/svelte/src/internal/client/dom/elements/attributes.js
function remove_input_defaults(input) {
  if (!hydrating) return;
  var already_removed = false;
  var remove_defaults = () => {
    if (already_removed) return;
    already_removed = true;
    if (input.hasAttribute("value")) {
      var value = input.value;
      set_attribute(input, "value", null);
      input.value = value;
    }
    if (input.hasAttribute("checked")) {
      var checked = input.checked;
      set_attribute(input, "checked", null);
      input.checked = checked;
    }
  };
  input.__on_r = remove_defaults;
  queue_idle_task(remove_defaults);
  add_form_reset_listener();
}
function set_value(element2, value) {
  var attributes = element2.__attributes ??= {};
  if (attributes.value === (attributes.value = value) || // @ts-expect-error
  // `progress` elements always need their value set when its `0`
  element2.value === value && (value !== 0 || element2.nodeName !== "PROGRESS"))
    return;
  element2.value = value;
}
function set_attribute(element2, attribute, value, skip_warning) {
  var attributes = element2.__attributes ??= {};
  if (hydrating) {
    attributes[attribute] = element2.getAttribute(attribute);
    if (attribute === "src" || attribute === "srcset" || attribute === "href" && element2.nodeName === "LINK") {
      if (!skip_warning) {
        check_src_in_dev_hydration(element2, attribute, value ?? "");
      }
      return;
    }
  }
  if (attributes[attribute] === (attributes[attribute] = value)) return;
  if (attribute === "style" && "__styles" in element2) {
    element2.__styles = {};
  }
  if (attribute === "loading") {
    element2[LOADING_ATTR_SYMBOL] = value;
  }
  if (value == null) {
    element2.removeAttribute(attribute);
  } else if (typeof value !== "string" && get_setters(element2).includes(attribute)) {
    element2[attribute] = value;
  } else {
    element2.setAttribute(attribute, value);
  }
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(element2) {
  var setters = setters_cache.get(element2.nodeName);
  if (setters) return setters;
  setters_cache.set(element2.nodeName, setters = []);
  var descriptors;
  var proto = get_prototype_of(element2);
  var element_proto = Element.prototype;
  while (element_proto !== proto) {
    descriptors = get_descriptors(proto);
    for (var key in descriptors) {
      if (descriptors[key].set) {
        setters.push(key);
      }
    }
    proto = get_prototype_of(proto);
  }
  return setters;
}
function check_src_in_dev_hydration(element2, attribute, value) {
  if (!DEV) return;
  if (attribute === "srcset" && srcset_url_equal(element2, value)) return;
  if (src_url_equal(element2.getAttribute(attribute) ?? "", value)) return;
  hydration_attribute_changed(
    attribute,
    element2.outerHTML.replace(element2.innerHTML, element2.innerHTML && "..."),
    String(value)
  );
}
function src_url_equal(element_src, url) {
  if (element_src === url) return true;
  return new URL(element_src, document.baseURI).href === new URL(url, document.baseURI).href;
}
function split_srcset(srcset) {
  return srcset.split(",").map((src) => src.trim().split(" ").filter(Boolean));
}
function srcset_url_equal(element2, srcset) {
  var element_urls = split_srcset(element2.srcset);
  var urls = split_srcset(srcset);
  return urls.length === element_urls.length && urls.every(
    ([url, width], i) => width === element_urls[i][1] && // We need to test both ways because Vite will create an a full URL with
    // `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
    // relative URLs inside srcset are not automatically resolved to absolute URLs by
    // browsers (in contrast to img.src). This means both SSR and DOM code could
    // contain relative or absolute URLs.
    (src_url_equal(element_urls[i][0], url) || src_url_equal(url, element_urls[i][0]))
  );
}

// node_modules/svelte/src/internal/client/dom/elements/class.js
function set_class(dom, value) {
  var prev_class_name = dom.__className;
  var next_class_name = to_class(value);
  if (hydrating && dom.className === next_class_name) {
    dom.__className = next_class_name;
  } else if (prev_class_name !== next_class_name || hydrating && dom.className !== next_class_name) {
    if (value == null) {
      dom.removeAttribute("class");
    } else {
      dom.className = next_class_name;
    }
    dom.__className = next_class_name;
  }
}
function to_class(value) {
  return value == null ? "" : value;
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/size.js
var ResizeObserverSingleton = class _ResizeObserverSingleton {
  /** */
  #listeners = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #observer;
  /** @type {ResizeObserverOptions} */
  #options;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(options) {
    this.#options = options;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(element2, listener) {
    var listeners = this.#listeners.get(element2) || /* @__PURE__ */ new Set();
    listeners.add(listener);
    this.#listeners.set(element2, listeners);
    this.#getObserver().observe(element2, this.#options);
    return () => {
      var listeners2 = this.#listeners.get(element2);
      listeners2.delete(listener);
      if (listeners2.size === 0) {
        this.#listeners.delete(element2);
        this.#observer.unobserve(element2);
      }
    };
  }
  #getObserver() {
    return this.#observer ?? (this.#observer = new ResizeObserver(
      /** @param {any} entries */
      (entries) => {
        for (var entry of entries) {
          _ResizeObserverSingleton.entries.set(entry.target, entry);
          for (var listener of this.#listeners.get(entry.target) || []) {
            listener(entry);
          }
        }
      }
    ));
  }
};
var resize_observer_border_box = /* @__PURE__ */ new ResizeObserverSingleton({
  box: "border-box"
});
function bind_element_size(element2, type, set2) {
  var unsub = resize_observer_border_box.observe(element2, () => set2(element2[type]));
  effect(() => {
    untrack(() => set2(element2[type]));
    return unsub;
  });
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function is_bound_this(bound_value, element_or_component) {
  return bound_value === element_or_component || bound_value?.[STATE_SYMBOL] === element_or_component;
}
function bind_this(element_or_component = {}, update2, get_value, get_parts) {
  effect(() => {
    var old_parts;
    var parts;
    render_effect(() => {
      old_parts = parts;
      parts = get_parts?.() || [];
      untrack(() => {
        if (element_or_component !== get_value(...parts)) {
          update2(element_or_component, ...parts);
          if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
            update2(null, ...old_parts);
          }
        }
      });
    });
    return () => {
      queue_micro_task(() => {
        if (parts && is_bound_this(get_value(...parts), element_or_component)) {
          update2(null, ...parts);
        }
      });
    };
  });
  return element_or_component;
}

// node_modules/svelte/src/internal/client/dom/legacy/event-modifiers.js
function preventDefault(fn) {
  return function(...args) {
    var event2 = (
      /** @type {Event} */
      args[0]
    );
    event2.preventDefault();
    return fn?.apply(this, args);
  };
}

// node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function init(immutable = false) {
  const context = (
    /** @type {ComponentContextLegacy} */
    component_context
  );
  const callbacks = context.l.u;
  if (!callbacks) return;
  let props = () => deep_read_state(context.s);
  if (immutable) {
    let version = 0;
    let prev = (
      /** @type {Record<string, any>} */
      {}
    );
    const d = derived(() => {
      let changed = false;
      const props2 = context.s;
      for (const key in props2) {
        if (props2[key] !== prev[key]) {
          prev[key] = props2[key];
          changed = true;
        }
      }
      if (changed) version++;
      return version;
    });
    props = () => get(d);
  }
  if (callbacks.b.length) {
    user_pre_effect(() => {
      observe_all(context, props);
      run_all(callbacks.b);
    });
  }
  user_effect(() => {
    const fns = untrack(() => callbacks.m.map(run));
    return () => {
      for (const fn of fns) {
        if (typeof fn === "function") {
          fn();
        }
      }
    };
  });
  if (callbacks.a.length) {
    user_effect(() => {
      observe_all(context, props);
      run_all(callbacks.a);
    });
  }
}
function observe_all(context, props) {
  if (context.l.s) {
    for (const signal of context.l.s) get(signal);
  }
  props();
}

// node_modules/svelte/src/index-client.js
function onMount(fn) {
  if (component_context === null) {
    lifecycle_outside_component("onMount");
  }
  if (legacy_mode_flag && component_context.l !== null) {
    init_update_callbacks(component_context).m.push(fn);
  } else {
    user_effect(() => {
      const cleanup = untrack(fn);
      if (typeof cleanup === "function") return (
        /** @type {() => void} */
        cleanup
      );
    });
  }
}
function onDestroy(fn) {
  if (component_context === null) {
    lifecycle_outside_component("onDestroy");
  }
  onMount(() => () => untrack(fn));
}
function init_update_callbacks(context) {
  var l = (
    /** @type {ComponentContextLegacy} */
    context.l
  );
  return l.u ??= { a: [], b: [], m: [] };
}

// node_modules/svelte/src/store/utils.js
function subscribe_to_store(store, run2, invalidate) {
  if (store == null) {
    run2(void 0);
    if (invalidate) invalidate(void 0);
    return noop;
  }
  const unsub = untrack(
    () => store.subscribe(
      run2,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

// node_modules/svelte/src/internal/client/reactivity/store.js
var is_store_binding = false;
function store_get(store, store_name, stores) {
  const entry = stores[store_name] ??= {
    store: null,
    source: mutable_source(void 0),
    unsubscribe: noop
  };
  if (entry.store !== store) {
    entry.unsubscribe();
    entry.store = store ?? null;
    if (store == null) {
      entry.source.v = void 0;
      entry.unsubscribe = noop;
    } else {
      var is_synchronous_callback = true;
      entry.unsubscribe = subscribe_to_store(store, (v) => {
        if (is_synchronous_callback) {
          entry.source.v = v;
        } else {
          set(entry.source, v);
        }
      });
      is_synchronous_callback = false;
    }
  }
  return get(entry.source);
}
function setup_stores() {
  const stores = {};
  teardown(() => {
    for (var store_name in stores) {
      const ref = stores[store_name];
      ref.unsubscribe();
    }
  });
  return stores;
}
function capture_store_binding(fn) {
  var previous_is_store_binding = is_store_binding;
  try {
    is_store_binding = false;
    return [fn(), is_store_binding];
  } finally {
    is_store_binding = previous_is_store_binding;
  }
}

// node_modules/svelte/src/internal/client/reactivity/props.js
function with_parent_branch(fn) {
  var effect2 = active_effect;
  var previous_effect = active_effect;
  while (effect2 !== null && (effect2.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
    effect2 = effect2.parent;
  }
  try {
    set_active_effect(effect2);
    return fn();
  } finally {
    set_active_effect(previous_effect);
  }
}
function prop(props, key, flags, fallback2) {
  var immutable = (flags & PROPS_IS_IMMUTABLE) !== 0;
  var runes = !legacy_mode_flag || (flags & PROPS_IS_RUNES) !== 0;
  var bindable = (flags & PROPS_IS_BINDABLE) !== 0;
  var lazy = (flags & PROPS_IS_LAZY_INITIAL) !== 0;
  var is_store_sub = false;
  var prop_value;
  if (bindable) {
    [prop_value, is_store_sub] = capture_store_binding(() => (
      /** @type {V} */
      props[key]
    ));
  } else {
    prop_value = /** @type {V} */
    props[key];
  }
  var setter = get_descriptor(props, key)?.set;
  var fallback_value = (
    /** @type {V} */
    fallback2
  );
  var fallback_dirty = true;
  var fallback_used = false;
  var get_fallback = () => {
    fallback_used = true;
    if (fallback_dirty) {
      fallback_dirty = false;
      if (lazy) {
        fallback_value = untrack(
          /** @type {() => V} */
          fallback2
        );
      } else {
        fallback_value = /** @type {V} */
        fallback2;
      }
    }
    return fallback_value;
  };
  if (prop_value === void 0 && fallback2 !== void 0) {
    if (setter && runes) {
      props_invalid_value(key);
    }
    prop_value = get_fallback();
    if (setter) setter(prop_value);
  }
  var getter;
  if (runes) {
    getter = () => {
      var value = (
        /** @type {V} */
        props[key]
      );
      if (value === void 0) return get_fallback();
      fallback_dirty = true;
      fallback_used = false;
      return value;
    };
  } else {
    var derived_getter = with_parent_branch(
      () => (immutable ? derived : derived_safe_equal)(() => (
        /** @type {V} */
        props[key]
      ))
    );
    derived_getter.f |= LEGACY_DERIVED_PROP;
    getter = () => {
      var value = get(derived_getter);
      if (value !== void 0) fallback_value = /** @type {V} */
      void 0;
      return value === void 0 ? fallback_value : value;
    };
  }
  if ((flags & PROPS_IS_UPDATED) === 0) {
    return getter;
  }
  if (setter) {
    var legacy_parent = props.$$legacy;
    return function(value, mutation) {
      if (arguments.length > 0) {
        if (!runes || !mutation || legacy_parent || is_store_sub) {
          setter(mutation ? getter() : value);
        }
        return value;
      } else {
        return getter();
      }
    };
  }
  var from_child = false;
  var was_from_child = false;
  var inner_current_value = mutable_source(prop_value);
  var current_value = with_parent_branch(
    () => derived(() => {
      var parent_value = getter();
      var child_value = get(inner_current_value);
      if (from_child) {
        from_child = false;
        was_from_child = true;
        return child_value;
      }
      was_from_child = false;
      return inner_current_value.v = parent_value;
    })
  );
  if (!immutable) current_value.equals = safe_equals;
  return function(value, mutation) {
    if (is_signals_recorded) {
      from_child = was_from_child;
      getter();
      get(inner_current_value);
    }
    if (arguments.length > 0) {
      const new_value = mutation ? get(current_value) : runes && bindable ? proxy(value) : value;
      if (!current_value.equals(new_value)) {
        from_child = true;
        set(inner_current_value, new_value);
        if (fallback_used && fallback_value !== void 0) {
          fallback_value = new_value;
        }
        untrack(() => get(current_value));
      }
      return value;
    }
    return get(current_value);
  };
}

// node_modules/svelte/src/legacy/legacy-client.js
function createClassComponent(options) {
  return new Svelte4Component(options);
}
var Svelte4Component = class {
  /** @type {any} */
  #events;
  /** @type {Record<string, any>} */
  #instance;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options) {
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key, value) => {
      var s = mutable_source(value);
      sources.set(key, s);
      return s;
    };
    const props = new Proxy(
      { ...options.props || {}, $$events: {} },
      {
        get(target, prop2) {
          return get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
        },
        has(target, prop2) {
          get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
          return Reflect.has(target, prop2);
        },
        set(target, prop2, value) {
          set(sources.get(prop2) ?? add_source(prop2, value), value);
          return Reflect.set(target, prop2, value);
        }
      }
    );
    this.#instance = (options.hydrate ? hydrate : mount)(options.component, {
      target: options.target,
      anchor: options.anchor,
      props,
      context: options.context,
      intro: options.intro ?? false,
      recover: options.recover
    });
    if (!options?.props?.$$host || options.sync === false) {
      flush_sync();
    }
    this.#events = props.$$events;
    for (const key of Object.keys(this.#instance)) {
      if (key === "$set" || key === "$destroy" || key === "$on") continue;
      define_property(this, key, {
        get() {
          return this.#instance[key];
        },
        /** @param {any} value */
        set(value) {
          this.#instance[key] = value;
        },
        enumerable: true
      });
    }
    this.#instance.$set = /** @param {Record<string, any>} next */
    (next2) => {
      Object.assign(props, next2);
    };
    this.#instance.$destroy = () => {
      unmount(this.#instance);
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    this.#instance.$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event2, callback) {
    this.#events[event2] = this.#events[event2] || [];
    const cb = (...args) => callback.call(this, ...args);
    this.#events[event2].push(cb);
    return () => {
      this.#events[event2] = this.#events[event2].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    this.#instance.$destroy();
  }
};

// node_modules/svelte/src/internal/client/dom/elements/custom-element.js
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    /** The Svelte component constructor */
    $$ctor;
    /** Slots */
    $$s;
    /** @type {any} The Svelte component instance */
    $$c;
    /** Whether or not the custom element is connected */
    $$cn = false;
    /** @type {Record<string, any>} Component props data */
    $$d = {};
    /** `true` if currently in the process of reflecting component props back to attributes */
    $$r = false;
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $$p_d = {};
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    $$l = {};
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    $$l_u = /* @__PURE__ */ new Map();
    /** @type {any} The managed render effect for reflecting attributes */
    $$me;
    /**
     * @param {*} $$componentCtor
     * @param {*} $$slots
     * @param {*} use_shadow_dom
     */
    constructor($$componentCtor, $$slots, use_shadow_dom) {
      super();
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (use_shadow_dom) {
        this.attachShadow({ mode: "open" });
      }
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    addEventListener(type, listener, options) {
      this.$$l[type] = this.$$l[type] || [];
      this.$$l[type].push(listener);
      if (this.$$c) {
        const unsub = this.$$c.$on(type, listener);
        this.$$l_u.set(listener, unsub);
      }
      super.addEventListener(type, listener, options);
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    removeEventListener(type, listener, options) {
      super.removeEventListener(type, listener, options);
      if (this.$$c) {
        const unsub = this.$$l_u.get(listener);
        if (unsub) {
          unsub();
          this.$$l_u.delete(listener);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let create_slot = function(name) {
          return (anchor) => {
            const slot2 = document.createElement("slot");
            if (name !== "default") slot2.name = name;
            append(anchor, slot2);
          };
        };
        await Promise.resolve();
        if (!this.$$cn || this.$$c) {
          return;
        }
        const $$slots = {};
        const existing_slots = get_custom_elements_slots(this);
        for (const name of this.$$s) {
          if (name in existing_slots) {
            if (name === "default" && !this.$$d.children) {
              this.$$d.children = create_slot(name);
              $$slots.default = true;
            } else {
              $$slots[name] = create_slot(name);
            }
          }
        }
        for (const attribute of this.attributes) {
          const name = this.$$g_p(attribute.name);
          if (!(name in this.$$d)) {
            this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
          }
        }
        for (const key in this.$$p_d) {
          if (!(key in this.$$d) && this[key] !== void 0) {
            this.$$d[key] = this[key];
            delete this[key];
          }
        }
        this.$$c = createClassComponent({
          component: this.$$ctor,
          target: this.shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots,
            $$host: this
          }
        });
        this.$$me = effect_root(() => {
          render_effect(() => {
            this.$$r = true;
            for (const key of object_keys(this.$$c)) {
              if (!this.$$p_d[key]?.reflect) continue;
              this.$$d[key] = this.$$c[key];
              const attribute_value = get_custom_element_value(
                key,
                this.$$d[key],
                this.$$p_d,
                "toAttribute"
              );
              if (attribute_value == null) {
                this.removeAttribute(this.$$p_d[key].attribute || key);
              } else {
                this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
              }
            }
            this.$$r = false;
          });
        });
        for (const type in this.$$l) {
          for (const listener of this.$$l[type]) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
        }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    /**
     * @param {string} attr
     * @param {string} _oldValue
     * @param {string} newValue
     */
    attributeChangedCallback(attr, _oldValue, newValue) {
      if (this.$$r) return;
      attr = this.$$g_p(attr);
      this.$$d[attr] = get_custom_element_value(attr, newValue, this.$$p_d, "toProp");
      this.$$c?.$set({ [attr]: this.$$d[attr] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn && this.$$c) {
          this.$$c.$destroy();
          this.$$me();
          this.$$c = void 0;
        }
      });
    }
    /**
     * @param {string} attribute_name
     */
    $$g_p(attribute_name) {
      return object_keys(this.$$p_d).find(
        (key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name
      ) || attribute_name;
    }
  };
}
function get_custom_element_value(prop2, value, props_definition, transform) {
  const type = props_definition[prop2]?.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop2]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
    }
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      // conversion already handled above
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
    }
  }
}
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach((node) => {
    result[
      /** @type {Element} node */
      node.slot || "default"
    ] = true;
  });
  return result;
}

// module/svelte/MouseGuardEditor.svelte
var root_1 = template(`<a class="editor-edit"><i class="fas fa-edit"></i></a>`);
var root = template(`<div class="editor svelte-1ccthvk"><span></span> <div class="editor-content svelte-1ccthvk"><!></div> <!></div>`);
function MouseGuardEditor($$anchor, $$props) {
  push($$props, false);
  const $$stores = setup_stores();
  const $sheetData = () => store_get(sheetData, "$sheetData", $$stores);
  let target = prop($$props, "target", 8);
  let sheetData = getContext("sheetStore");
  let data = mutable_state();
  const TextEditor = globalThis.TextEditor;
  let editorContent = mutable_state();
  let height = mutable_state();
  let mce;
  let rawContent = mutable_state(getProperty($sheetData()?.data, target()) ?? "");
  let content = mutable_state(TextEditor.enrichHTML(get(rawContent), {
    secrets: $sheetData().isOwner,
    async: false
  }));
  let editor = {};
  onDestroy(async () => {
    if (mce) mce.destroy();
  });
  const createEditor = async () => {
    TextEditor.create({
      target: get(editorContent),
      invalid_elements: "iframe",
      save_onsavecallback: async (m) => {
        mce = m;
        const isDirty = mce.getContent() !== editor.initial;
        mce.remove();
        if (isDirty) {
          await $sheetData().sheet._onSubmit(new Event("submit"));
        }
        mce.destroy();
      }
    }).then((m) => {
      editor.m = m;
      mce = m;
      editor.changed = false;
      editor.active = true;
      mce.focus();
      mce.on("change", (ev) => editor.changed = true);
    });
  };
  legacy_pre_effect(() => $sheetData(), () => {
    set(data, $sheetData().data);
  });
  legacy_pre_effect(
    () => (get(rawContent), $sheetData(), deep_read_state(target())),
    () => {
      set(rawContent, getProperty($sheetData()?.data, target()));
      set(content, TextEditor.enrichHTML(get(rawContent), {
        secrets: $sheetData().isOwner,
        async: false
      }));
    }
  );
  legacy_pre_effect_reset();
  init();
  var div = root();
  var div_1 = sibling(child(div), 2);
  var node = child(div_1);
  html(node, () => get(content), false, false);
  reset(div_1);
  bind_this(div_1, ($$value) => set(editorContent, $$value), () => get(editorContent));
  var node_1 = sibling(div_1, 2);
  if_block(node_1, () => $sheetData().editable, ($$anchor2) => {
    var a = root_1();
    event("click", a, preventDefault(createEditor));
    append($$anchor2, a);
  });
  reset(div);
  template_effect(() => set_attribute(div_1, "data-edit", target()));
  bind_element_size(div_1, "clientHeight", ($$value) => set(height, $$value));
  append($$anchor, div);
  pop();
}

// module/svelte/MouseGuardActorSheetMouseDetails.svelte
var root2 = template(`<largecard class="svelte-i1yp9p"><h1 class="svelte-i1yp9p"></h1> <ul><lineitem class="svelte-i1yp9p"><label class="svelte-i1yp9p"></label> <input name="system.details.age" type="number" placeholder="0" class="svelte-i1yp9p"></lineitem> <lineitem class="svelte-i1yp9p"><label class="svelte-i1yp9p"></label> <input name="system.details.parents" type="text" class="svelte-i1yp9p"></lineitem> <lineitem class="svelte-i1yp9p"><label class="svelte-i1yp9p"></label> <input name="system.details.home" type="text" class="svelte-i1yp9p"></lineitem> <lineitem class="svelte-i1yp9p"><label class="svelte-i1yp9p"></label> <input name="system.details.senior_artisan" type="text" class="svelte-i1yp9p"></lineitem> <lineitem class="svelte-i1yp9p"><label class="svelte-i1yp9p"></label> <input name="system.details.fur_color" type="text" class="svelte-i1yp9p"></lineitem> <lineitem class="svelte-i1yp9p"><label class="svelte-i1yp9p"></label> <input name="system.details.mentor" type="text" class="svelte-i1yp9p"></lineitem> <lineitem class="svelte-i1yp9p"><label class="svelte-i1yp9p"></label> <input name="system.details.cloak_color" type="text" class="svelte-i1yp9p"></lineitem> <lineitem class="svelte-i1yp9p"><label class="svelte-i1yp9p"></label> <input name="system.details.friend" type="text" class="svelte-i1yp9p"></lineitem> <lineitem class="svelte-i1yp9p"><label class="svelte-i1yp9p"></label> <input name="system.details.guard_rank" type="text" class="svelte-i1yp9p"></lineitem> <lineitem class="svelte-i1yp9p"><label class="svelte-i1yp9p"></label> <input name="system.details.enemy" type="text" class="svelte-i1yp9p"></lineitem></ul></largecard> <h1 class="svelte-i1yp9p"></h1> <!>`, 1);
function MouseGuardActorSheetMouseDetails($$anchor, $$props) {
  push($$props, false);
  const $$stores = setup_stores();
  const $sheetData = () => store_get(sheetData, "$sheetData", $$stores);
  let sheetData = getContext("sheetStore");
  let data = mutable_state();
  legacy_pre_effect(() => $sheetData(), () => {
    set(data, $sheetData().data);
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root2();
  var largecard = first_child(fragment);
  var h1 = child(largecard);
  h1.textContent = game.i18n.localize("MOUSEGUARD.About");
  var ul = sibling(h1, 2);
  var lineitem = child(ul);
  var label = child(lineitem);
  label.textContent = `${game.i18n.localize("MOUSEGUARD.Age") ?? ""}:`;
  var input = sibling(label, 2);
  remove_input_defaults(input);
  reset(lineitem);
  var lineitem_1 = sibling(lineitem, 2);
  var label_1 = child(lineitem_1);
  label_1.textContent = `${game.i18n.localize("MOUSEGUARD.Parents") ?? ""}:`;
  var input_1 = sibling(label_1, 2);
  remove_input_defaults(input_1);
  set_attribute(input_1, "placeholder", game.i18n.localize("MOUSEGUARD.Parents"));
  reset(lineitem_1);
  var lineitem_2 = sibling(lineitem_1, 2);
  var label_2 = child(lineitem_2);
  label_2.textContent = `${game.i18n.localize("MOUSEGUARD.Home") ?? ""}:`;
  var input_2 = sibling(label_2, 2);
  remove_input_defaults(input_2);
  set_attribute(input_2, "placeholder", game.i18n.localize("MOUSEGUARD.Home"));
  reset(lineitem_2);
  var lineitem_3 = sibling(lineitem_2, 2);
  var label_3 = child(lineitem_3);
  label_3.textContent = `${game.i18n.localize("MOUSEGUARD.Senior") ?? ""}:`;
  var input_3 = sibling(label_3, 2);
  remove_input_defaults(input_3);
  set_attribute(input_3, "placeholder", game.i18n.localize("MOUSEGUARD.Senior"));
  reset(lineitem_3);
  var lineitem_4 = sibling(lineitem_3, 2);
  var label_4 = child(lineitem_4);
  label_4.textContent = `${game.i18n.localize("MOUSEGUARD.Fur") ?? ""}:`;
  var input_4 = sibling(label_4, 2);
  remove_input_defaults(input_4);
  set_attribute(input_4, "placeholder", game.i18n.localize("MOUSEGUARD.Fur"));
  reset(lineitem_4);
  var lineitem_5 = sibling(lineitem_4, 2);
  var label_5 = child(lineitem_5);
  label_5.textContent = `${game.i18n.localize("MOUSEGUARD.Mentor") ?? ""}:`;
  var input_5 = sibling(label_5, 2);
  remove_input_defaults(input_5);
  set_attribute(input_5, "placeholder", game.i18n.localize("MOUSEGUARD.Mentor"));
  reset(lineitem_5);
  var lineitem_6 = sibling(lineitem_5, 2);
  var label_6 = child(lineitem_6);
  label_6.textContent = `${game.i18n.localize("MOUSEGUARD.Cloak") ?? ""}:`;
  var input_6 = sibling(label_6, 2);
  remove_input_defaults(input_6);
  set_attribute(input_6, "placeholder", game.i18n.localize("MOUSEGUARD.Cloak"));
  reset(lineitem_6);
  var lineitem_7 = sibling(lineitem_6, 2);
  var label_7 = child(lineitem_7);
  label_7.textContent = `${game.i18n.localize("MOUSEGUARD.Friend") ?? ""}:`;
  var input_7 = sibling(label_7, 2);
  remove_input_defaults(input_7);
  set_attribute(input_7, "placeholder", game.i18n.localize("MOUSEGUARD.Friend"));
  reset(lineitem_7);
  var lineitem_8 = sibling(lineitem_7, 2);
  var label_8 = child(lineitem_8);
  label_8.textContent = `${game.i18n.localize("MOUSEGUARD.GuardRank") ?? ""}:`;
  var input_8 = sibling(label_8, 2);
  remove_input_defaults(input_8);
  set_attribute(input_8, "placeholder", game.i18n.localize("MOUSEGUARD.GuardRank"));
  reset(lineitem_8);
  var lineitem_9 = sibling(lineitem_8, 2);
  var label_9 = child(lineitem_9);
  label_9.textContent = `${game.i18n.localize("MOUSEGUARD.Enemy") ?? ""}:`;
  var input_9 = sibling(label_9, 2);
  remove_input_defaults(input_9);
  set_attribute(input_9, "placeholder", game.i18n.localize("MOUSEGUARD.Enemy"));
  reset(lineitem_9);
  reset(ul);
  reset(largecard);
  var h1_1 = sibling(largecard, 2);
  h1_1.textContent = game.i18n.localize("MOUSEGUARD.Bio");
  var node = sibling(h1_1, 2);
  MouseGuardEditor(node, { target: "system.biography" });
  template_effect(() => {
    set_value(input, get(data).system.details.age);
    set_value(input_1, get(data).system.details.parents);
    set_value(input_2, get(data).system.details.home);
    set_value(input_3, get(data).system.details.senior_artisan);
    set_value(input_4, get(data).system.details.fur_color);
    set_value(input_5, get(data).system.details.mentor);
    set_value(input_6, get(data).system.details.cloak_color);
    set_value(input_7, get(data).system.details.friend);
    set_value(input_8, get(data).system.details.guard_rank);
    set_value(input_9, get(data).system.details.enemy);
  });
  append($$anchor, fragment);
  pop();
}

// module/svelte/MouseGuardActorSheetMouseRewards.svelte
var root3 = template(`<largecard class="svelte-1maq3ft"><h1 class="svelte-1maq3ft"></h1> <left class="left svelte-1maq3ft"><fatebox class="svelte-1maq3ft"><label class="header svelte-1maq3ft"></label> <input name="system.rewards.fate" type="number" placeholder="0" class="svelte-1maq3ft"></fatebox> <personabox class="svelte-1maq3ft"><label class="header svelte-1maq3ft"></label> <input name="system.rewards.persona" type="number" placeholder="0" class="svelte-1maq3ft"></personabox> <checksbox class="svelte-1maq3ft"><label class="header svelte-1maq3ft"></label> <input name="system.rewards.check" type="number" placeholder="0" class="svelte-1maq3ft"></checksbox></left> <right class="right svelte-1maq3ft"><rewardbox class="svelte-1maq3ft"><label class="svelte-1maq3ft"></label> <label class="sub svelte-1maq3ft"><!></label> <textarea name="system.rewards.belief" class="svelte-1maq3ft"></textarea></rewardbox> <rewardbox class="svelte-1maq3ft"><label class="svelte-1maq3ft"></label> <label class="sub svelte-1maq3ft"><!></label> <textarea name="system.rewards.instinct" class="svelte-1maq3ft"></textarea></rewardbox> <rewardbox class="svelte-1maq3ft"><label class="svelte-1maq3ft"></label> <label class="sub svelte-1maq3ft"><!></label> <textarea name="system.rewards.goal" class="svelte-1maq3ft"></textarea></rewardbox></right></largecard>`);
function MouseGuardActorSheetMouseRewards($$anchor, $$props) {
  push($$props, false);
  const $$stores = setup_stores();
  const $sheetData = () => store_get(sheetData, "$sheetData", $$stores);
  let sheetData = getContext("sheetStore");
  let data = mutable_state();
  legacy_pre_effect(() => $sheetData(), () => {
    set(data, $sheetData().data);
  });
  legacy_pre_effect_reset();
  init();
  var largecard = root3();
  var h1 = child(largecard);
  h1.textContent = game.i18n.localize("MOUSEGUARD.Rewards");
  var left = sibling(h1, 2);
  var fatebox = child(left);
  var label = child(fatebox);
  label.textContent = game.i18n.localize("MOUSEGUARD.Fate");
  var input = sibling(label, 2);
  remove_input_defaults(input);
  reset(fatebox);
  var personabox = sibling(fatebox, 2);
  var label_1 = child(personabox);
  label_1.textContent = game.i18n.localize("MOUSEGUARD.Persona");
  var input_1 = sibling(label_1, 2);
  remove_input_defaults(input_1);
  reset(personabox);
  var checksbox = sibling(personabox, 2);
  var label_2 = child(checksbox);
  label_2.textContent = game.i18n.localize("MOUSEGUARD.Checks");
  var input_2 = sibling(label_2, 2);
  remove_input_defaults(input_2);
  reset(checksbox);
  reset(left);
  var right = sibling(left, 2);
  var rewardbox = child(right);
  var label_3 = child(rewardbox);
  label_3.textContent = game.i18n.localize("MOUSEGUARD.Belief");
  var label_4 = sibling(label_3, 2);
  var node = child(label_4);
  html(node, () => game.i18n.localize("MOUSEGUARD.BeliefSub"), false, false);
  reset(label_4);
  var textarea = sibling(label_4, 2);
  remove_textarea_child(textarea);
  reset(rewardbox);
  var rewardbox_1 = sibling(rewardbox, 2);
  var label_5 = child(rewardbox_1);
  label_5.textContent = game.i18n.localize("MOUSEGUARD.Instinct");
  var label_6 = sibling(label_5, 2);
  var node_1 = child(label_6);
  html(node_1, () => game.i18n.localize("MOUSEGUARD.InstinctSub"), false, false);
  reset(label_6);
  var textarea_1 = sibling(label_6, 2);
  remove_textarea_child(textarea_1);
  reset(rewardbox_1);
  var rewardbox_2 = sibling(rewardbox_1, 2);
  var label_7 = child(rewardbox_2);
  label_7.textContent = game.i18n.localize("MOUSEGUARD.Goal");
  var label_8 = sibling(label_7, 2);
  var node_2 = child(label_8);
  html(node_2, () => game.i18n.localize("MOUSEGUARD.GoalSub"), false, false);
  reset(label_8);
  var textarea_2 = sibling(label_8, 2);
  remove_textarea_child(textarea_2);
  reset(rewardbox_2);
  reset(right);
  reset(largecard);
  template_effect(() => {
    set_value(input, get(data).system.rewards.fate);
    set_value(input_1, get(data).system.rewards.persona);
    set_value(input_2, get(data).system.rewards.check);
    set_value(textarea, get(data).system.rewards.belief);
    set_value(textarea_1, get(data).system.rewards.instinct);
    set_value(textarea_2, get(data).system.rewards.goal);
  });
  append($$anchor, largecard);
  pop();
}

// module/svelte/MouseGuardCommon.svelte
function updateRating(sheet, item2, type, value) {
  const ob = { [type]: value };
  if (type == "rank" || type == "rating" || type == "level") {
    if (value < 1) ob[type] = 1;
    ob.fail = 0;
    ob.pass = 0;
  }
  sheet?._updateEmbededItem(item2, ob);
}
function setMouseDice(sheet, count, message = "") {
  sheet?._setMouseDice(count, message);
}

// module/svelte/MouseGuardActorSheetMouseAbilities.svelte
var root_2 = template(`<input type="number" min="0" class="svelte-3lzvcr">`);
var root_4 = template(`<div class="checkmark svelte-3lzvcr"></div>`);
var root_5 = template(`<div class="no-checkmark svelte-3lzvcr"></div>`);
var root_7 = template(`<div class="checkmark svelte-3lzvcr"></div>`);
var root_8 = template(`<div class="no-checkmark svelte-3lzvcr"></div>`);
var root_12 = template(`<ability class="svelte-3lzvcr"><div><label class="header svelte-3lzvcr"><a> </a>:</label> <input type="number" min="0" class="svelte-3lzvcr"> <!> <pass class="svelte-3lzvcr"> <!></pass> <fail class="svelte-3lzvcr"> <!></fail></div></ability>`);
var root4 = template(`<largecard class="svelte-3lzvcr"><h1 class="svelte-3lzvcr"></h1> <!></largecard>`);
function MouseGuardActorSheetMouseAbilities($$anchor, $$props) {
  push($$props, false);
  const $$stores = setup_stores();
  const $sheetData = () => store_get(sheetData, "$sheetData", $$stores);
  let sheetData = getContext("sheetStore");
  let { sheet } = $sheetData();
  let data = mutable_state();
  let abilities = mutable_state();
  legacy_pre_effect(() => $sheetData(), () => {
    set(data, $sheetData().data);
  });
  legacy_pre_effect(() => $sheetData(), () => {
    set(abilities, $sheetData().data.system.itemTypes.ability);
  });
  legacy_pre_effect_reset();
  init();
  var largecard = root4();
  var h1 = child(largecard);
  h1.textContent = game.i18n.localize("MOUSEGUARD.Abilities");
  var node = sibling(h1, 2);
  each(node, 1, () => get(abilities), index, ($$anchor2, ability) => {
    var ability_1 = root_12();
    var div = child(ability_1);
    var label = child(div);
    var a = child(label);
    var text2 = child(a, true);
    template_effect(() => set_text(text2, game.i18n.localize(get(ability).name)));
    reset(a);
    next();
    reset(label);
    var input = sibling(label, 2);
    remove_input_defaults(input);
    var node_1 = sibling(input, 2);
    if_block(node_1, () => get(ability).name === "MOUSEGUARD.MNature", ($$anchor3) => {
      var input_1 = root_2();
      remove_input_defaults(input_1);
      template_effect(() => {
        set_attribute(input_1, "name", get(ability).id);
        set_value(input_1, get(ability).system.tax);
      });
      event("change", input_1, (e) => updateRating(sheet, e.target.name, "tax", parseInt(e.target.value)));
      append($$anchor3, input_1);
    });
    var pass = sibling(node_1, 2);
    var text_1 = child(pass);
    text_1.nodeValue = `${game.i18n.localize("MOUSEGUARD.P") ?? ""}: `;
    var node_2 = sibling(text_1);
    each(
      node_2,
      1,
      () => ({
        length: parseInt(get(ability).system.rating) + 1
      }),
      index,
      ($$anchor3, _, i) => {
        var fragment = comment();
        var node_3 = first_child(fragment);
        if_block(
          node_3,
          () => get(ability).system.pass > i,
          ($$anchor4) => {
            var div_1 = root_4();
            event("click", div_1, (e) => updateRating(sheet, get(ability).id, "pass", parseInt(get(ability).system.pass) - 1));
            append($$anchor4, div_1);
          },
          ($$anchor4) => {
            var div_2 = root_5();
            event("click", div_2, (e) => updateRating(sheet, get(ability).id, "pass", parseInt(get(ability).system.pass) + 1));
            append($$anchor4, div_2);
          }
        );
        append($$anchor3, fragment);
      }
    );
    reset(pass);
    var fail = sibling(pass, 2);
    var text_2 = child(fail);
    text_2.nodeValue = `${game.i18n.localize("MOUSEGUARD.F") ?? ""}: `;
    var node_4 = sibling(text_2);
    each(
      node_4,
      1,
      () => ({
        length: parseInt(get(ability).system.rating)
      }),
      index,
      ($$anchor3, _, i) => {
        var fragment_1 = comment();
        var node_5 = first_child(fragment_1);
        if_block(
          node_5,
          () => get(ability).system.fail > i,
          ($$anchor4) => {
            var div_3 = root_7();
            event("click", div_3, (e) => updateRating(sheet, get(ability).id, "fail", parseInt(get(ability).system.fail) - 1));
            append($$anchor4, div_3);
          },
          ($$anchor4) => {
            var div_4 = root_8();
            event("click", div_4, (e) => updateRating(sheet, get(ability).id, "fail", parseInt(get(ability).system.fail) + 1));
            append($$anchor4, div_4);
          }
        );
        append($$anchor3, fragment_1);
      }
    );
    reset(fail);
    reset(div);
    reset(ability_1);
    template_effect(() => {
      set_attribute(div, "name", get(ability).id);
      set_attribute(input, "name", get(ability).id);
      set_value(input, get(ability).system.rating);
    });
    event("click", label, (e) => setMouseDice(sheet, get(ability).system.rating, game.i18n.localize(get(ability).name)));
    event("change", input, (e) => updateRating(sheet, e.target.name, "rating", parseInt(e.target.value)));
    append($$anchor2, ability_1);
  });
  reset(largecard);
  append($$anchor, largecard);
  pop();
}

// module/svelte/MouseGuardActorSheetMouseSkills.svelte
var root_3 = template(`<div class="checkmark svelte-1v01e5x"></div>`);
var root_42 = template(`<div class="no-checkmark svelte-1v01e5x"></div>`);
var root_6 = template(`<div class="checkmark svelte-1v01e5x"></div>`);
var root_72 = template(`<div class="no-checkmark svelte-1v01e5x"></div>`);
var root_13 = template(`<skill class="svelte-1v01e5x"><div><label class="header svelte-1v01e5x"><a> </a>:</label> <input type="number" min="0" class="svelte-1v01e5x"> <pass class="svelte-1v01e5x"> <!></pass> <fail class="svelte-1v01e5x"> <!></fail></div> <div class="item-controls svelte-1v01e5x"><a class="item-control item-delete" title="Delete Item"><i class="fas fa-trash"></i></a></div></skill>`);
var root5 = template(`<largecard class="svelte-1v01e5x"><div class="item-controls item-create svelte-1v01e5x"><a class="item-control" data-type="wise"><i class="fas fa-plus"></i> </a></div> <h1 class="svelte-1v01e5x"></h1> <!></largecard>`);
function MouseGuardActorSheetMouseSkills($$anchor, $$props) {
  push($$props, false);
  const $$stores = setup_stores();
  const $sheetData = () => store_get(sheetData, "$sheetData", $$stores);
  const skills = mutable_state();
  let sheetData = getContext("sheetStore");
  let { sheet } = $sheetData();
  let data = mutable_state();
  const openSkillsCompendium = () => () => game.packs.get("mouseguard.skills").render(true);
  legacy_pre_effect(() => $sheetData(), () => {
    set(data, $sheetData().data);
  });
  legacy_pre_effect(() => $sheetData(), () => {
    set(skills, $sheetData().data.system.itemTypes.skill);
  });
  legacy_pre_effect_reset();
  init();
  var largecard = root5();
  var div = child(largecard);
  var a = child(div);
  var event_handler = derived(openSkillsCompendium);
  set_attribute(a, "title", game.i18n.localize("MOUSEGUARD.AddSkill"));
  var text2 = sibling(child(a));
  text2.nodeValue = ` ${game.i18n.localize("MOUSEGUARD.AddSkill") ?? ""}`;
  reset(a);
  reset(div);
  var h1 = sibling(div, 2);
  h1.textContent = game.i18n.localize("MOUSEGUARD.Skills");
  var node = sibling(h1, 2);
  each(node, 1, () => get(skills), index, ($$anchor2, skill) => {
    var skill_1 = root_13();
    var div_1 = child(skill_1);
    var label = child(div_1);
    var a_1 = child(label);
    var text_1 = child(a_1, true);
    template_effect(() => set_text(text_1, game.i18n.localize(get(skill).name)));
    reset(a_1);
    next();
    reset(label);
    var input = sibling(label, 2);
    remove_input_defaults(input);
    var pass = sibling(input, 2);
    var text_2 = child(pass);
    text_2.nodeValue = `${game.i18n.localize("MOUSEGUARD.P") ?? ""}: `;
    var node_1 = sibling(text_2);
    each(
      node_1,
      1,
      () => ({
        length: parseInt(get(skill).system.rank) + 1
      }),
      index,
      ($$anchor3, _, i) => {
        var fragment = comment();
        var node_2 = first_child(fragment);
        if_block(
          node_2,
          () => get(skill).system.pass > i,
          ($$anchor4) => {
            var div_2 = root_3();
            event("click", div_2, (e) => updateRating(sheet, get(skill).id, "pass", parseInt(get(skill).system.pass) - 1));
            append($$anchor4, div_2);
          },
          ($$anchor4) => {
            var div_3 = root_42();
            event("click", div_3, (e) => updateRating(sheet, get(skill).id, "pass", parseInt(get(skill).system.pass) + 1));
            append($$anchor4, div_3);
          }
        );
        append($$anchor3, fragment);
      }
    );
    reset(pass);
    var fail = sibling(pass, 2);
    var text_3 = child(fail);
    text_3.nodeValue = `${game.i18n.localize("MOUSEGUARD.F") ?? ""}: `;
    var node_3 = sibling(text_3);
    each(
      node_3,
      1,
      () => ({
        length: parseInt(get(skill).system.rank)
      }),
      index,
      ($$anchor3, _, i) => {
        var fragment_1 = comment();
        var node_4 = first_child(fragment_1);
        if_block(
          node_4,
          () => get(skill).system.fail > i,
          ($$anchor4) => {
            var div_4 = root_6();
            event("click", div_4, (e) => updateRating(sheet, get(skill).id, "fail", parseInt(get(skill).system.fail) - 1));
            append($$anchor4, div_4);
          },
          ($$anchor4) => {
            var div_5 = root_72();
            event("click", div_5, (e) => updateRating(sheet, get(skill).id, "fail", parseInt(get(skill).system.fail) + 1));
            append($$anchor4, div_5);
          }
        );
        append($$anchor3, fragment_1);
      }
    );
    reset(fail);
    reset(div_1);
    var div_6 = sibling(div_1, 2);
    var a_2 = child(div_6);
    var event_handler_1 = derived(() => sheet?._onItemDelete(get(skill).id));
    reset(div_6);
    reset(skill_1);
    template_effect(() => {
      set_attribute(div_1, "name", get(skill).id);
      set_attribute(input, "name", get(skill).id);
      set_value(input, get(skill).system.rank);
    });
    event("click", label, (e) => setMouseDice(sheet, get(skill).system.rank, game.i18n.localize(get(skill).name)));
    event("change", input, (e) => updateRating(sheet, e.target.name, "rank", parseInt(e.target.value)));
    event("click", a_2, function(...$$args) {
      get(event_handler_1)?.apply(this, $$args);
    });
    append($$anchor2, skill_1);
  });
  reset(largecard);
  event("click", a, function(...$$args) {
    get(event_handler)?.apply(this, $$args);
  });
  append($$anchor, largecard);
  pop();
}

// module/svelte/MouseGuardActorSheetMouseWises.svelte
var root_32 = template(`<div class="checkmark svelte-ebjd4e"></div>`);
var root_43 = template(`<div class="no-checkmark svelte-ebjd4e"></div>`);
var root_62 = template(`<div class="checkmark svelte-ebjd4e"></div>`);
var root_73 = template(`<div class="no-checkmark svelte-ebjd4e"></div>`);
var root_14 = template(`<wise class="svelte-ebjd4e"><div><label class="header svelte-ebjd4e"><a> </a>:</label> <input type="number" min="0" class="svelte-ebjd4e"> <pass class="svelte-ebjd4e"> <!></pass> <fail class="svelte-ebjd4e"> <!></fail></div> <div class="item-controls svelte-ebjd4e"><a class="item-control item-delete" title="Delete Item"><i class="fas fa-trash"></i></a></div></wise>`);
var root6 = template(`<largecard class="svelte-ebjd4e"><div class="item-controls item-create svelte-ebjd4e"><a class="item-control" data-type="wise"><i class="fas fa-plus"></i> </a></div> <h1 class="svelte-ebjd4e"></h1> <!></largecard>`);
function MouseGuardActorSheetMouseWises($$anchor, $$props) {
  push($$props, false);
  const $$stores = setup_stores();
  const $sheetData = () => store_get(sheetData, "$sheetData", $$stores);
  const wises = mutable_state();
  let sheetData = getContext("sheetStore");
  let { sheet } = $sheetData();
  let data = mutable_state();
  legacy_pre_effect(() => $sheetData(), () => {
    set(data, $sheetData().data);
  });
  legacy_pre_effect(() => $sheetData(), () => {
    set(wises, $sheetData().data.system.itemTypes.wise);
  });
  legacy_pre_effect_reset();
  init();
  var largecard = root6();
  var div = child(largecard);
  var a = child(div);
  var event_handler = derived(() => sheet?._onItemCreate.bind(sheet));
  set_attribute(a, "title", game.i18n.localize("MOUSEGUARD.AddWise"));
  var text2 = sibling(child(a));
  text2.nodeValue = ` ${game.i18n.localize("MOUSEGUARD.AddWise") ?? ""}`;
  reset(a);
  reset(div);
  var h1 = sibling(div, 2);
  h1.textContent = game.i18n.localize("MOUSEGUARD.Wises");
  var node = sibling(h1, 2);
  each(node, 1, () => get(wises), index, ($$anchor2, wise) => {
    var wise_1 = root_14();
    var div_1 = child(wise_1);
    var label = child(div_1);
    var a_1 = child(label);
    var text_1 = child(a_1, true);
    template_effect(() => set_text(text_1, game.i18n.localize(get(wise).name)));
    reset(a_1);
    next();
    reset(label);
    var input = sibling(label, 2);
    remove_input_defaults(input);
    var pass = sibling(input, 2);
    var text_2 = child(pass);
    text_2.nodeValue = `${game.i18n.localize("MOUSEGUARD.P") ?? ""}: `;
    var node_1 = sibling(text_2);
    each(
      node_1,
      1,
      () => ({
        length: parseInt(get(wise).system.rank) + 1
      }),
      index,
      ($$anchor3, _, i) => {
        var fragment = comment();
        var node_2 = first_child(fragment);
        if_block(
          node_2,
          () => get(wise).system.pass > i,
          ($$anchor4) => {
            var div_2 = root_32();
            event("click", div_2, (e) => updateRating(sheet, get(wise).id, "pass", parseInt(get(wise).system.pass) - 1));
            append($$anchor4, div_2);
          },
          ($$anchor4) => {
            var div_3 = root_43();
            event("click", div_3, (e) => updateRating(sheet, get(wise).id, "pass", parseInt(get(wise).system.pass) + 1));
            append($$anchor4, div_3);
          }
        );
        append($$anchor3, fragment);
      }
    );
    reset(pass);
    var fail = sibling(pass, 2);
    var text_3 = child(fail);
    text_3.nodeValue = `${game.i18n.localize("MOUSEGUARD.F") ?? ""}: `;
    var node_3 = sibling(text_3);
    each(
      node_3,
      1,
      () => ({
        length: parseInt(get(wise).system.rank)
      }),
      index,
      ($$anchor3, _, i) => {
        var fragment_1 = comment();
        var node_4 = first_child(fragment_1);
        if_block(
          node_4,
          () => get(wise).system.fail > i,
          ($$anchor4) => {
            var div_4 = root_62();
            event("click", div_4, (e) => updateRating(sheet, get(wise).id, "fail", parseInt(get(wise).system.fail) - 1));
            append($$anchor4, div_4);
          },
          ($$anchor4) => {
            var div_5 = root_73();
            event("click", div_5, (e) => updateRating(sheet, get(wise).id, "fail", parseInt(get(wise).system.fail) + 1));
            append($$anchor4, div_5);
          }
        );
        append($$anchor3, fragment_1);
      }
    );
    reset(fail);
    reset(div_1);
    var div_6 = sibling(div_1, 2);
    var a_2 = child(div_6);
    var event_handler_1 = derived(() => sheet?._onItemDelete(get(wise).id));
    reset(div_6);
    reset(wise_1);
    template_effect(() => {
      set_attribute(div_1, "name", get(wise).id);
      set_attribute(input, "name", get(wise).id);
      set_value(input, get(wise).system.rank);
    });
    event("click", label, (e) => setMouseDice(sheet, get(wise).system.rank, game.i18n.localize(get(wise).name)));
    event("change", input, (e) => updateRating(sheet, e.target.name, "rank", parseInt(e.target.value)));
    event("click", a_2, function(...$$args) {
      get(event_handler_1)?.apply(this, $$args);
    });
    append($$anchor2, wise_1);
  });
  reset(largecard);
  event("click", a, function(...$$args) {
    get(event_handler)?.apply(this, $$args);
  });
  append($$anchor, largecard);
  pop();
}

// module/svelte/MouseGuardActorSheetMouseTraits.svelte
var root_33 = template(`<div class="checkmark svelte-11zbf01"></div>`);
var root_44 = template(`<div class="no-checkmark svelte-11zbf01"></div>`);
var root_63 = template(`<div class="checkmark svelte-11zbf01"></div>`);
var root_74 = template(`<div class="no-checkmark svelte-11zbf01"></div>`);
var root_15 = template(`<trait class="svelte-11zbf01"><div><label class="header svelte-11zbf01"><a> </a>:</label> <input type="number" min="1" max="3" class="svelte-11zbf01"> <for class="svelte-11zbf01"> <!></for> <pass class="svelte-11zbf01"> <!></pass></div> <div class="item-controls svelte-11zbf01"><a class="item-control item-delete" title="Delete Item"><i class="fas fa-trash"></i></a></div></trait>`);
var root7 = template(`<largecard class="svelte-11zbf01"><div class="item-controls item-create svelte-11zbf01"><a class="item-control" data-type="wise"><i class="fas fa-plus"></i> </a></div> <h1 class="svelte-11zbf01"></h1> <!></largecard>`);
function MouseGuardActorSheetMouseTraits($$anchor, $$props) {
  push($$props, false);
  const $$stores = setup_stores();
  const $sheetData = () => store_get(sheetData, "$sheetData", $$stores);
  const traits = mutable_state();
  let sheetData = getContext("sheetStore");
  let { sheet } = $sheetData();
  let data = mutable_state();
  const openCompendium = () => () => game.packs.get("mouseguard.traits").render(true);
  legacy_pre_effect(() => $sheetData(), () => {
    set(data, $sheetData().data);
  });
  legacy_pre_effect(() => $sheetData(), () => {
    set(traits, $sheetData().data.system.itemTypes.trait);
  });
  legacy_pre_effect_reset();
  init();
  var largecard = root7();
  var div = child(largecard);
  var a = child(div);
  var event_handler = derived(openCompendium);
  set_attribute(a, "title", game.i18n.localize("MOUSEGUARD.AddTrait"));
  var text2 = sibling(child(a));
  text2.nodeValue = ` ${game.i18n.localize("MOUSEGUARD.AddTrait") ?? ""}`;
  reset(a);
  reset(div);
  var h1 = sibling(div, 2);
  h1.textContent = game.i18n.localize("MOUSEGUARD.Traits");
  var node = sibling(h1, 2);
  each(node, 1, () => get(traits), index, ($$anchor2, trait) => {
    var trait_1 = root_15();
    var div_1 = child(trait_1);
    var label = child(div_1);
    var a_1 = child(label);
    var text_1 = child(a_1, true);
    template_effect(() => set_text(text_1, game.i18n.localize(get(trait).name)));
    reset(a_1);
    next();
    reset(label);
    var input = sibling(label, 2);
    remove_input_defaults(input);
    var for_1 = sibling(input, 2);
    var text_2 = child(for_1);
    text_2.nodeValue = `${game.i18n.localize("MOUSEGUARD.F") ?? ""}: `;
    var node_1 = sibling(text_2);
    each(node_1, 0, () => ({ length: 1 }), index, ($$anchor3, _, i) => {
      var fragment = comment();
      var node_2 = first_child(fragment);
      if_block(
        node_2,
        () => get(trait).system.usedfor > i,
        ($$anchor4) => {
          var div_2 = root_33();
          event("click", div_2, (e) => updateRating(sheet, get(trait).id, "usedfor", parseInt(get(trait).system.usedfor) - 1));
          append($$anchor4, div_2);
        },
        ($$anchor4) => {
          var div_3 = root_44();
          event("click", div_3, (e) => updateRating(sheet, get(trait).id, "usedfor", parseInt(get(trait).system.usedfor) + 1));
          append($$anchor4, div_3);
        }
      );
      append($$anchor3, fragment);
    });
    reset(for_1);
    var pass = sibling(for_1, 2);
    var text_3 = child(pass);
    text_3.nodeValue = `${game.i18n.localize("MOUSEGUARD.A") ?? ""}: `;
    var node_3 = sibling(text_3);
    each(node_3, 0, () => ({ length: 6 }), index, ($$anchor3, _, i) => {
      var fragment_1 = comment();
      var node_4 = first_child(fragment_1);
      if_block(
        node_4,
        () => get(trait).system.usedagainst > i,
        ($$anchor4) => {
          var div_4 = root_63();
          event("click", div_4, (e) => updateRating(sheet, get(trait).id, "usedagainst", parseInt(get(trait).system.usedagainst) - 1));
          append($$anchor4, div_4);
        },
        ($$anchor4) => {
          var div_5 = root_74();
          event("click", div_5, (e) => updateRating(sheet, get(trait).id, "usedagainst", parseInt(get(trait).system.usedagainst) + 1));
          append($$anchor4, div_5);
        }
      );
      append($$anchor3, fragment_1);
    });
    reset(pass);
    reset(div_1);
    var div_6 = sibling(div_1, 2);
    var a_2 = child(div_6);
    var event_handler_1 = derived(() => sheet?._onItemDelete(get(trait).id));
    reset(div_6);
    reset(trait_1);
    template_effect(() => {
      set_attribute(div_1, "name", get(trait).id);
      set_attribute(input, "name", get(trait).id);
      set_value(input, get(trait).system.level);
    });
    event("click", label, (e) => setMouseDice(sheet, get(trait).system.level, game.i18n.localize(get(trait).name)));
    event("change", input, (e) => updateRating(sheet, e.target.name, "level", parseInt(e.target.value)));
    event("click", a_2, function(...$$args) {
      get(event_handler_1)?.apply(this, $$args);
    });
    append($$anchor2, trait_1);
  });
  reset(largecard);
  event("click", a, function(...$$args) {
    get(event_handler)?.apply(this, $$args);
  });
  append($$anchor, largecard);
  pop();
}

// module/svelte/MouseGuardActorSheetMouseSkillAbilityTab.svelte
var root8 = template(`<abilities class="svelte-4dvw4"><!></abilities> <wise class="svelte-4dvw4"><!></wise> <skill class="svelte-4dvw4"><!></skill> <trait class="svelte-4dvw4"><!></trait>`, 1);
function MouseGuardActorSheetMouseSkillAbilityTab($$anchor) {
  var fragment = root8();
  var abilities = first_child(fragment);
  var node = child(abilities);
  MouseGuardActorSheetMouseAbilities(node, {});
  reset(abilities);
  var wise = sibling(abilities, 2);
  var node_1 = child(wise);
  MouseGuardActorSheetMouseWises(node_1, {});
  reset(wise);
  var skill = sibling(wise, 2);
  var node_2 = child(skill);
  MouseGuardActorSheetMouseSkills(node_2, {});
  reset(skill);
  var trait = sibling(skill, 2);
  var node_3 = child(trait);
  MouseGuardActorSheetMouseTraits(node_3, {});
  reset(trait);
  append($$anchor, fragment);
}

// module/svelte/MouseGuardActorSheetMouseDispo.svelte
var root9 = template(`<largecard class="svelte-ujgmh3"><h1 class="svelte-ujgmh3"></h1> <dispoBox class="svelte-ujgmh3"><startingBox class="svelte-ujgmh3"><label class="header svelte-ujgmh3"></label> <input class="disposition-value svelte-ujgmh3" name="system.disposition.starting" type="number" placeholder="0"></startingBox> <currentBox class="svelte-ujgmh3"><label class="header svelte-ujgmh3"></label> <input class="disposition-value svelte-ujgmh3" name="system.disposition.current" type="number" placeholder="0"></currentBox></dispoBox></largecard>`);
function MouseGuardActorSheetMouseDispo($$anchor, $$props) {
  push($$props, false);
  const $$stores = setup_stores();
  const $sheetData = () => store_get(sheetData, "$sheetData", $$stores);
  let sheetData = getContext("sheetStore");
  let data = mutable_state();
  legacy_pre_effect(() => $sheetData(), () => {
    set(data, $sheetData().data);
  });
  legacy_pre_effect_reset();
  init();
  var largecard = root9();
  var h1 = child(largecard);
  h1.textContent = game.i18n.localize("MOUSEGUARD.Disposition");
  var dispoBox = sibling(h1, 2);
  var startingBox = child(dispoBox);
  var label = child(startingBox);
  label.textContent = `${game.i18n.localize("MOUSEGUARD.Starting") ?? ""}
                ${game.i18n.localize("MOUSEGUARD.Disposition") ?? ""}`;
  var input = sibling(label, 2);
  remove_input_defaults(input);
  reset(startingBox);
  var currentBox = sibling(startingBox, 2);
  var label_1 = child(currentBox);
  label_1.textContent = `${game.i18n.localize("MOUSEGUARD.Current") ?? ""}
                ${game.i18n.localize("MOUSEGUARD.Disposition") ?? ""}`;
  var input_1 = sibling(label_1, 2);
  remove_input_defaults(input_1);
  reset(currentBox);
  reset(dispoBox);
  reset(largecard);
  template_effect(() => {
    set_value(input, get(data).system.disposition.starting);
    set_value(input_1, get(data).system.disposition.current);
  });
  append($$anchor, largecard);
  pop();
}

// module/svelte/MouseGuardActorSheetMousePortrait.svelte
var root10 = template(`<portrait><img class="profile-img svelte-1qaezql" data-edit="img" height="100" width="100"></portrait>`);
function MouseGuardActorSheetMousePortrait($$anchor, $$props) {
  push($$props, false);
  const $$stores = setup_stores();
  const $sheetData = () => store_get(sheetData, "$sheetData", $$stores);
  let sheetData = getContext("sheetStore");
  let { actor, sheet } = $sheetData();
  let data = mutable_state();
  const filePicker = (event2) => {
    const attr = event2.currentTarget.dataset.edit;
    const current = getProperty(get(data), attr);
    const fp = new FilePicker({
      type: "image",
      current,
      callback: (path) => {
        actor.update({ [attr]: path });
      },
      top: sheet.position.top + 40,
      left: sheet.position.left + 10
    });
    return fp.browse();
  };
  legacy_pre_effect(() => $sheetData(), () => {
    set(data, $sheetData().data);
  });
  legacy_pre_effect_reset();
  init();
  var portrait = root10();
  var img = child(portrait);
  reset(portrait);
  template_effect(() => {
    set_attribute(img, "src", get(data).img);
    set_attribute(img, "title", get(data).name);
  });
  event("click", img, filePicker);
  append($$anchor, portrait);
  pop();
}

// module/svelte/MouseGuardActorSheetMouseName.svelte
var root11 = template(`<div class="namebox svelte-1ktqi3y"><label class="svelte-1ktqi3y"></label> <input name="name" type="text" class="svelte-1ktqi3y"></div>`);
function MouseGuardActorSheetMouseName($$anchor, $$props) {
  push($$props, false);
  const $$stores = setup_stores();
  const $sheetData = () => store_get(sheetData, "$sheetData", $$stores);
  let sheetData = getContext("sheetStore");
  let data = mutable_state();
  legacy_pre_effect(() => $sheetData(), () => {
    set(data, $sheetData().data);
  });
  legacy_pre_effect_reset();
  init();
  var div = root11();
  var label = child(div);
  label.textContent = game.i18n.localize("MOUSEGUARD.Name");
  var input = sibling(label, 2);
  remove_input_defaults(input);
  set_attribute(input, "placeholder", game.i18n.localize("MOUSEGUARD.Name"));
  reset(div);
  template_effect(() => set_value(input, get(data).name));
  append($$anchor, div);
  pop();
}

// module/svelte/MouseGuardActorSheetBase.svelte
var root_16 = template(`<a> </a>`);
var root12 = template(`<content class="svelte-1i8sr00"><div class="flex-container svelte-1i8sr00"><div class="flex-item svelte-1i8sr00"><!> <nav class="sheet-navigation tabs"></nav></div> <!></div> <div class="box svelte-1i8sr00"><!></div></content>`);
function MouseGuardActorSheetBase($$anchor, $$props) {
  push($$props, false);
  let dataStore = prop($$props, "dataStore", 8);
  setContext("sheetStore", dataStore());
  let items = [
    {
      label: game.i18n.localize("MOUSEGUARD.About"),
      component: MouseGuardActorSheetMouseDetails
    },
    {
      label: game.i18n.localize("MOUSEGUARD.Tab2"),
      value: 2,
      component: MouseGuardActorSheetMouseSkillAbilityTab
    },
    {
      label: game.i18n.localize("MOUSEGUARD.Rewards"),
      component: MouseGuardActorSheetMouseRewards
    },
    {
      label: game.i18n.localize("MOUSEGUARD.Disposition"),
      component: MouseGuardActorSheetMouseDispo
    }
  ];
  let activeTabValue = prop($$props, "activeTabValue", 28, () => items[0].component);
  const handleClick = (tabValue) => () => activeTabValue(tabValue);
  init();
  var content = root12();
  var div = child(content);
  var div_1 = child(div);
  var node = child(div_1);
  MouseGuardActorSheetMouseName(node, {});
  var nav = sibling(node, 2);
  each(nav, 5, () => items, index, ($$anchor2, item2) => {
    var a = root_16();
    var event_handler = derived(() => handleClick(get(item2).component));
    var text2 = child(a, true);
    reset(a);
    template_effect(() => {
      set_class(a, `item ${(activeTabValue() === get(item2).component ? "active" : "") ?? ""}`);
      set_text(text2, get(item2).label);
    });
    event("click", a, function(...$$args) {
      get(event_handler)?.apply(this, $$args);
    });
    append($$anchor2, a);
  });
  reset(nav);
  reset(div_1);
  var node_1 = sibling(div_1, 2);
  MouseGuardActorSheetMousePortrait(node_1, {});
  reset(div);
  var div_2 = sibling(div, 2);
  var node_2 = child(div_2);
  if_block(node_2, activeTabValue, ($$anchor2) => {
    var fragment = comment();
    var node_3 = first_child(fragment);
    component(node_3, activeTabValue, ($$anchor3, $$component) => {
      $$component($$anchor3, {});
    });
    append($$anchor2, fragment);
  });
  reset(div_2);
  reset(content);
  append($$anchor, content);
  pop();
}

// node_modules/svelte/src/store/shared/index.js
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  function subscribe(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2, update2) || noop;
    }
    run2(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set2, update: update2, subscribe };
}

// module/actor-sheet.js
var MouseGuardActorSheet = class extends ActorSheet {
  app = null;
  dataStore = null;
  /** @inheritdoc */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["mouseguard", "sheet", "actor"],
      template: "systems/mouseguard/templates/actor-sheetv2.html",
      width: 850,
      height: 600,
      tabs: []
    });
  }
  /* -------------------------------------------- */
  /** @inheritdoc */
  getData() {
    const context = super.getData();
    context.sheet = this;
    return context;
  }
  /* -------------------------------------------- */
  /** @inheritdoc */
  activateListeners(html2) {
    super.activateListeners(html2);
    if (!this.isEditable) return;
    html2.find(".item-control").click(this._onItemControl.bind(this));
    html2.find(".items .rollable").on("click", this._onItemRoll.bind(this));
  }
  /* -------------------------------------------- */
  /**
   * Handle click events for Item control buttons within the Actor Sheet
   * @param event
   * @private
   */
  _onItemControl(event2) {
    event2.preventDefault();
    const button = event2.currentTarget;
    const li = button.closest(".item");
    const item2 = this.actor.items.get(li?.dataset.itemId);
    switch (button.dataset.action) {
      case "create":
        const cls = getDocumentClass("Item");
        return cls.create(
          {
            name: game.i18n.localize("MOUSEGUARD.ItemNew"),
            type: "item"
          },
          { parent: this.actor }
        );
      case "edit":
        return item2.sheet.render(true);
      case "delete":
        return item2.delete();
    }
  }
  /* -------------------------------------------- */
  /**
   * Listen for roll buttons on items.
   * @param {MouseEvent} event    The originating left click event
   */
  _onItemRoll(event2) {
    let button = $(event2.currentTarget);
    const li = button.parents(".item");
    const item2 = this.actor.items.get(li.data("itemId"));
    let r = new Roll(button.data("roll"), this.actor.getRollData());
    return r.toMessage({
      user: game.user.id,
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `<h2>${item2.name}</h2><h3>${button.text()}</h3>`
    });
  }
  /* -------------------------------------------- */
  __onSubmit(event2) {
    event2 = super._onSubmit(event2);
    console.log(event2);
    return event2;
  }
  /** @inheritdoc */
  _getSubmitData(updateData) {
    let formData = super._getSubmitData(updateData);
    return formData;
  }
  _setMouseDice(count, message = "") {
    game.mouseguard.RollCount = count;
    game.mouseguard.RollMessage = message;
    game.mouseguard.updateDisplay(count);
  }
  async _updateActorAbility(id, type, value) {
    await this.actor.updateEmbeddedDocuments("Item", [
      { _id: id, data: { [type]: value } }
    ]);
  }
  async _updateEmbededItem(id, _data) {
    await this.actor.updateEmbeddedDocuments("Item", [
      { _id: id, data: _data }
    ]);
  }
  async _onItemDelete(itemId) {
    console.log(itemId);
    const item2 = this.actor.items.get(itemId);
    item2.delete();
    this.render();
  }
  async _onItemCreate(event2) {
    event2.preventDefault();
    const header = event2.currentTarget;
    const type = header.dataset.type;
    const data = duplicate(header.dataset);
    const name = `New ${type.capitalize()}`;
    const itemData = {
      name,
      type,
      data
    };
    itemData.data = { rank: 1 };
    delete itemData.data["type"];
    return await Item.create(itemData, { parent: this.actor }).then(
      (item2) => {
        item2.sheet.render(true);
      }
    );
  }
  render(force = false, options = {}) {
    let sheetData = this.getData();
    if (this.app !== null) {
      let states = Application.RENDER_STATES;
      if (this._state == states.RENDERING || this._state == states.RENDERED) {
        this.dataStore?.set(sheetData);
        return;
      }
    }
    this._render(force, options).catch((err) => {
      err.message = `An error occurred while rendering ${this.constructor.name} ${this.appId}: ${err.message}`;
      console.error(err);
      this._state = Application.RENDER_STATES.ERROR;
    }).then((rendered) => {
      this.dataStore = writable(sheetData);
      this.app = new MouseGuardActorSheetBase({
        target: this.element.find("form").get(0),
        props: {
          dataStore: this.dataStore
          //name: 'world',
        }
      });
    });
    options.editable = options.editable ?? this.object.isOwner;
    this.object.apps[this.appId] = this;
    return this;
  }
  close(options = {}) {
    if (this.app != null) {
      this.app.$destroy();
      this.app = null;
      this.dataStore = null;
    }
    return super.close(options);
  }
};

// module/svelte/MouseGuardActorSheetHeader.svelte
var root13 = template(`<actorhead><div class="flex-container svelte-b0h6ac"><div class="flex-item svelte-b0h6ac"><!></div> <!></div></actorhead>`);
function MouseGuardActorSheetHeader($$anchor, $$props) {
  push($$props, false);
  const $$stores = setup_stores();
  const $sheetData = () => store_get(sheetData, "$sheetData", $$stores);
  let sheetData = getContext("sheetStore");
  let { actor, sheet } = $sheetData();
  let data = mutable_state();
  console.log(get(data));
  const filePicker = (event2) => {
    const attr = event2.currentTarget.dataset.edit;
    const current = getProperty(get(data), attr);
    const fp = new FilePicker({
      type: "image",
      current,
      callback: (path) => {
        actor.update({ [attr]: path });
      },
      top: sheet.position.top + 40,
      left: sheet.position.left + 10
    });
    return fp.browse();
  };
  legacy_pre_effect(() => $sheetData(), () => {
    set(data, $sheetData().data);
  });
  legacy_pre_effect_reset();
  init();
  var actorhead = root13();
  var div = child(actorhead);
  var div_1 = child(div);
  var node = child(div_1);
  MouseGuardActorSheetMouseName(node, {});
  reset(div_1);
  var node_1 = sibling(div_1, 2);
  MouseGuardActorSheetMousePortrait(node_1, {});
  reset(div);
  reset(actorhead);
  append($$anchor, actorhead);
  pop();
}

// module/svelte/MouseGuardNPCActorSheetBody.svelte
var root_17 = template(`<ability class="svelte-1f8afzj"><div><label class="header svelte-1f8afzj"><a> </a>:</label> <input type="number" min="0" class="svelte-1f8afzj"></div></ability>`);
var root_34 = template(`<skill class="svelte-1f8afzj"><div><label class="header svelte-1f8afzj"><a> </a>:</label> <input type="number" class="svelte-1f8afzj"></div> <div class="item-controls"><a class="item-control item-delete" title="Delete Item"><i class="fas fa-trash"></i></a></div></skill>`);
var root_22 = template(`<div class="box svelte-1f8afzj"><largecard class="svelte-1f8afzj"><h1 class="svelte-1f8afzj"></h1> <!></largecard></div>`);
var root_52 = template(`<trait class="svelte-1f8afzj"><div><label class="header svelte-1f8afzj"><a> </a>:</label> <input type="number" class="svelte-1f8afzj"></div> <div class="item-controls"><a class="item-control item-delete" title="Delete Item"><i class="fas fa-trash"></i></a></div></trait>`);
var root_45 = template(`<div class="box svelte-1f8afzj"><largecard class="svelte-1f8afzj"><h1 class="svelte-1f8afzj"></h1> <!></largecard></div>`);
var root_75 = template(`<wise class="svelte-1f8afzj"><div><label class="header svelte-1f8afzj"><a> </a>:</label> <input type="number" class="svelte-1f8afzj"></div> <div class="item-controls"><a class="item-control item-delete" title="Delete Item"><i class="fas fa-trash"></i></a></div></wise>`);
var root_64 = template(`<h1 class="svelte-1f8afzj"></h1> <!>`, 1);
var root14 = template(`<div class="box svelte-1f8afzj"><largecard class="svelte-1f8afzj"><h1 class="svelte-1f8afzj"></h1> <div class="flex-container svelte-1f8afzj"></div></largecard></div> <!> <!> <!>`, 1);
function MouseGuardNPCActorSheetBody($$anchor, $$props) {
  push($$props, false);
  const $$stores = setup_stores();
  const $sheetData = () => store_get(sheetData, "$sheetData", $$stores);
  const skills = mutable_state();
  const wises = mutable_state();
  const traits = mutable_state();
  let sheetData = getContext("sheetStore");
  let { sheet } = $sheetData();
  let data = mutable_state();
  let abilities = mutable_state();
  legacy_pre_effect(() => $sheetData(), () => {
    set(data, $sheetData().data);
  });
  legacy_pre_effect(() => $sheetData(), () => {
    set(abilities, $sheetData().data.system.itemTypes.ability);
  });
  legacy_pre_effect(() => $sheetData(), () => {
    set(skills, $sheetData().data.system.itemTypes.skill);
  });
  legacy_pre_effect(() => $sheetData(), () => {
    set(wises, $sheetData().data.system.itemTypes.wise);
  });
  legacy_pre_effect(() => $sheetData(), () => {
    set(traits, $sheetData().data.system.itemTypes.trait);
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root14();
  var div = first_child(fragment);
  var largecard = child(div);
  var h1 = child(largecard);
  h1.textContent = game.i18n.localize("MOUSEGUARD.Abilities");
  var div_1 = sibling(h1, 2);
  each(div_1, 5, () => get(abilities), index, ($$anchor2, ability) => {
    var ability_1 = root_17();
    var div_2 = child(ability_1);
    var label = child(div_2);
    var a = child(label);
    var text2 = child(a, true);
    template_effect(() => set_text(text2, game.i18n.localize(get(ability).name)));
    reset(a);
    next();
    reset(label);
    var input = sibling(label, 2);
    remove_input_defaults(input);
    reset(div_2);
    reset(ability_1);
    template_effect(() => {
      set_attribute(div_2, "name", get(ability).id);
      set_attribute(input, "name", get(ability).id);
      set_value(input, get(ability).system.rating);
    });
    event("click", label, (e) => setMouseDice(sheet, get(ability).system.rating));
    event("change", input, (e) => updateRating(sheet, e.target.name, "rating", parseInt(e.target.value)));
    append($$anchor2, ability_1);
  });
  reset(div_1);
  reset(largecard);
  reset(div);
  var node = sibling(div, 2);
  if_block(node, () => Object(get(skills)).length > 0, ($$anchor2) => {
    var div_3 = root_22();
    var largecard_1 = child(div_3);
    var h1_1 = child(largecard_1);
    h1_1.textContent = game.i18n.localize("MOUSEGUARD.Skills");
    var node_1 = sibling(h1_1, 2);
    each(node_1, 1, () => get(skills), index, ($$anchor3, skill) => {
      var skill_1 = root_34();
      var div_4 = child(skill_1);
      var label_1 = child(div_4);
      var a_1 = child(label_1);
      var text_1 = child(a_1, true);
      template_effect(() => set_text(text_1, game.i18n.localize(get(skill).name)));
      reset(a_1);
      next();
      reset(label_1);
      var input_1 = sibling(label_1, 2);
      remove_input_defaults(input_1);
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      var a_2 = child(div_5);
      var event_handler = derived(() => sheet?._onItemDelete(get(skill)._id));
      reset(div_5);
      reset(skill_1);
      template_effect(() => {
        set_attribute(div_4, "name", get(skill).id);
        set_attribute(input_1, "name", get(skill).id);
        set_value(input_1, get(skill).system.rank);
      });
      event("click", label_1, (e) => setMouseDice(sheet, get(skill).system.rank, game.i18n.localize(get(skill).name)));
      event("change", input_1, (e) => updateRating(sheet, e.target.name, "rank", parseInt(e.target.value)));
      event("click", a_2, function(...$$args) {
        get(event_handler)?.apply(this, $$args);
      });
      append($$anchor3, skill_1);
    });
    reset(largecard_1);
    reset(div_3);
    append($$anchor2, div_3);
  });
  var node_2 = sibling(node, 2);
  if_block(node_2, () => Object(get(traits)).length > 0, ($$anchor2) => {
    var div_6 = root_45();
    var largecard_2 = child(div_6);
    var h1_2 = child(largecard_2);
    h1_2.textContent = game.i18n.localize("MOUSEGUARD.Traits");
    var node_3 = sibling(h1_2, 2);
    each(node_3, 1, () => get(traits), index, ($$anchor3, trait) => {
      var trait_1 = root_52();
      var div_7 = child(trait_1);
      var label_2 = child(div_7);
      var a_3 = child(label_2);
      var text_2 = child(a_3, true);
      template_effect(() => set_text(text_2, game.i18n.localize(get(trait).name)));
      reset(a_3);
      next();
      reset(label_2);
      var input_2 = sibling(label_2, 2);
      remove_input_defaults(input_2);
      reset(div_7);
      var div_8 = sibling(div_7, 2);
      var a_4 = child(div_8);
      var event_handler_1 = derived(() => sheet?._onItemDelete(get(trait)._id));
      reset(div_8);
      reset(trait_1);
      template_effect(() => {
        set_attribute(div_7, "name", get(trait).id);
        set_attribute(input_2, "name", get(trait).id);
        set_value(input_2, get(trait).system.level);
      });
      event("click", label_2, (e) => setMouseDice(sheet, get(trait).system.level, game.i18n.localize(get(trait).name)));
      event("change", input_2, (e) => updateRating(sheet, e.target.name, "level", parseInt(e.target.value)));
      event("click", a_4, function(...$$args) {
        get(event_handler_1)?.apply(this, $$args);
      });
      append($$anchor3, trait_1);
    });
    reset(largecard_2);
    reset(div_6);
    append($$anchor2, div_6);
  });
  var node_4 = sibling(node_2, 2);
  if_block(node_4, () => Object(get(wises)).length > 0, ($$anchor2) => {
    var fragment_1 = root_64();
    var h1_3 = first_child(fragment_1);
    h1_3.textContent = game.i18n.localize("MOUSEGUARD.Wises");
    var node_5 = sibling(h1_3, 2);
    each(node_5, 1, () => get(wises), index, ($$anchor3, wise) => {
      var wise_1 = root_75();
      var div_9 = child(wise_1);
      var label_3 = child(div_9);
      var a_5 = child(label_3);
      var text_3 = child(a_5, true);
      template_effect(() => set_text(text_3, game.i18n.localize(get(wise).name)));
      reset(a_5);
      next();
      reset(label_3);
      var input_3 = sibling(label_3, 2);
      remove_input_defaults(input_3);
      reset(div_9);
      var div_10 = sibling(div_9, 2);
      var a_6 = child(div_10);
      var event_handler_2 = derived(() => sheet?._onItemDelete(get(wise)._id));
      reset(div_10);
      reset(wise_1);
      template_effect(() => {
        set_attribute(div_9, "name", get(wise).id);
        set_attribute(input_3, "name", get(wise).id);
        set_value(input_3, get(wise).system.rank);
      });
      event("click", label_3, (e) => setMouseDice(sheet, get(wise).system.rank, game.i18n.localize(get(wise).name)));
      event("change", input_3, (e) => updateRating(sheet, e.target.name, "rank", parseInt(e.target.value)));
      event("click", a_6, function(...$$args) {
        get(event_handler_2)?.apply(this, $$args);
      });
      append($$anchor3, wise_1);
    });
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
}

// module/svelte/MouseGuardNPCActorSheetBase.svelte
var root15 = template(`<div class="box svelte-1tx1hpn"><!></div> <div class="box svelte-1tx1hpn"><!></div> <div class="box svelte-1tx1hpn"><!></div>`, 1);
function MouseGuardNPCActorSheetBase($$anchor, $$props) {
  push($$props, false);
  let dataStore = prop($$props, "dataStore", 8);
  setContext("sheetStore", dataStore());
  init();
  var fragment = root15();
  var div = first_child(fragment);
  var node = child(div);
  MouseGuardActorSheetHeader(node, {});
  reset(div);
  var div_1 = sibling(div, 2);
  var node_1 = child(div_1);
  MouseGuardNPCActorSheetBody(node_1, {});
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node_2 = child(div_2);
  MouseGuardActorSheetMouseDispo(node_2, {});
  reset(div_2);
  append($$anchor, fragment);
  pop();
}

// module/npcactor-sheet.js
var MouseGuardNPCActorSheet = class extends ActorSheet {
  app = null;
  dataStore = null;
  /** @inheritdoc */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["mouseguard", "sheet", "actor"],
      template: "systems/mouseguard/templates/actor-sheetv2.html",
      width: 550,
      height: 600,
      tabs: []
    });
  }
  /* -------------------------------------------- */
  /** @inheritdoc */
  getData() {
    const context = super.getData();
    context.systemData = context.system;
    context.sheet = this;
    return context;
  }
  /* -------------------------------------------- */
  /** @inheritdoc */
  activateListeners(html2) {
    super.activateListeners(html2);
    if (!this.isEditable) return;
    html2.find(".item-control").click(this._onItemControl.bind(this));
    html2.find(".items .rollable").on("click", this._onItemRoll.bind(this));
  }
  /* -------------------------------------------- */
  /**
   * Handle click events for Item control buttons within the Actor Sheet
   * @param event
   * @private
   */
  _onItemControl(event2) {
    event2.preventDefault();
    const button = event2.currentTarget;
    const li = button.closest(".item");
    const item2 = this.actor.items.get(li?.dataset.itemId);
    switch (button.dataset.action) {
      case "create":
        const cls = getDocumentClass("Item");
        return cls.create(
          {
            name: game.i18n.localize("MOUSEGUARD.ItemNew"),
            type: "item"
          },
          { parent: this.actor }
        );
      case "edit":
        return item2.sheet.render(true);
      case "delete":
        return item2.delete();
    }
  }
  /* -------------------------------------------- */
  /**
   * Listen for roll buttons on items.
   * @param {MouseEvent} event    The originating left click event
   */
  _onItemRoll(event2) {
    let button = $(event2.currentTarget);
    const li = button.parents(".item");
    const item2 = this.actor.items.get(li.data("itemId"));
    let r = new Roll(button.data("roll"), this.actor.getRollData());
    return r.toMessage({
      user: game.user.id,
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `<h2>${item2.name}</h2><h3>${button.text()}</h3>`
    });
  }
  /* -------------------------------------------- */
  /** @inheritdoc */
  _getSubmitData(updateData) {
    let formData = super._getSubmitData(updateData);
    return formData;
  }
  _setMouseDice(count) {
    game.mouseguard.RollCount = count;
    game.mouseguard.updateDisplay(count);
  }
  async _updateActorAbility(id, type, value) {
    await this.actor.updateEmbeddedDocuments("Item", [
      { _id: id, data: { [type]: value } }
    ]);
  }
  async _updateEmbededItem(id, _data) {
    await this.actor.updateEmbeddedDocuments("Item", [
      { _id: id, data: _data }
    ]);
  }
  async _onItemDelete(itemId) {
    const item2 = this.actor.items.get(itemId);
    item2.delete();
    this.render();
  }
  async _onItemCreate(event2) {
    event2.preventDefault();
    const header = event2.currentTarget;
    const type = header.dataset.type;
    const data = duplicate(header.dataset);
    const name = `New ${type.capitalize()}`;
    const itemData = {
      name,
      type,
      data
    };
    itemData.data = { rank: 1 };
    delete itemData.data["type"];
    return await Item.create(itemData, { parent: this.actor }).then(
      (item2) => {
        item2.sheet.render(true);
      }
    );
  }
  render(force = false, options = {}) {
    let sheetData = this.getData();
    if (this.app !== null) {
      let states = Application.RENDER_STATES;
      if (this._state == states.RENDERING || this._state == states.RENDERED) {
        this.dataStore?.set(sheetData);
        return;
      }
    }
    this._render(force, options).catch((err) => {
      err.message = `An error occurred while rendering ${this.constructor.name} ${this.appId}: ${err.message}`;
      console.error(err);
      this._state = Application.RENDER_STATES.ERROR;
    }).then((rendered) => {
      this.dataStore = writable(sheetData);
      this.app = new MouseGuardNPCActorSheetBase({
        target: this.element.find("form").get(0),
        props: {
          dataStore: this.dataStore
          //name: 'world',
        }
      });
    });
    options.editable = options.editable ?? this.object.isOwner;
    this.object.apps[this.appId] = this;
    return this;
  }
  close(options = {}) {
    if (this.app != null) {
      this.app.$destroy();
      this.app = null;
      this.dataStore = null;
    }
    return super.close(options);
  }
};

// module/templates.js
var preloadHandlebarsTemplates = async function() {
  const templatePaths = [
    // Attribute list partial.
    "systems/mouseguard/templates/parts/sheet-attributes.html",
    "systems/mouseguard/templates/parts/sheet-groups.html",
    "systems/mouseguard/templates/sidebar/combatant.html",
    "systems/mouseguard/templates/effects/effects-panel.hbs",
    "systems/mouseguard/templates/effects/effect.hbs"
  ];
  return loadTemplates(templatePaths);
};

// module/macro.js
async function createMouseGuardMacro(data, slot2) {
  const command = `const roll = new Roll("${data.roll}", actor ? actor.getRollData() : {});
  roll.toMessage({speaker, flavor: "${data.label}"});`;
  let macro = game.macros.entities.find((m) => m.name === item.label && m.command === command);
  if (!macro) {
    macro = await Macro.create({
      name: data.label,
      type: "script",
      command,
      flags: { "mouseguard.attrMacro": true }
    });
  }
  game.user.assignHotbarMacro(macro, slot2);
  return false;
}

// module/mousedie.js
var MouseDie = class extends Die {
  constructor(termData) {
    termData.faces = 6;
    super(termData);
  }
  /* -------------------------------------------- */
  /** @override */
  static DENOMINATION = "m";
  /* -------------------------------------------- */
  /** @override */
  getResultLabel(result) {
    return {
      1: '<img src="systems/mouseguard/assets/dice/snake.png" />',
      2: '<img src="systems/mouseguard/assets/dice/snake.png" />',
      3: '<img src="systems/mouseguard/assets/dice/snake.png" />',
      4: '<img src="systems/mouseguard/assets/dice/sword.png" />',
      5: '<img src="systems/mouseguard/assets/dice/sword.png" />',
      6: '<img src="systems/mouseguard/assets/dice/axe.png" />'
    }[result.result];
  }
};
var mouseChatData = async (roll, chatOptions) => {
  const isPrivate = chatOptions.isPrivate;
  return {
    formula: isPrivate ? "???" : roll._formula,
    flavor: isPrivate ? null : chatOptions.flavor,
    user: chatOptions.user,
    tooltip: isPrivate ? "" : await roll.getTooltip(),
    result: isPrivate ? "?" : roll.result,
    dice_count: isPrivate ? "?" : roll.terms[0].number,
    drop: false,
    claimed: roll.claimed ?? false
  };
};
var MouseRoll = class extends Roll {
  constructor(...args) {
    super(...args);
  }
  /**
   * Render a DropRoll instance to HTML
   * @param {object} [chatOptions]      An object configuring the behavior of the resulting chat message.
   * @return {Promise<string>}          The rendered HTML template as a string
   */
  async render(chatOptions = {}) {
    chatOptions = foundry.utils.mergeObject(
      {
        user: game.user.id,
        flavor: null,
        template: this.constructor.CHAT_TEMPLATE,
        blind: false
      },
      chatOptions
    );
    if (!this._evaluated) this.evaluate();
    let chatData = await mouseChatData(this, chatOptions);
    return renderTemplate(chatOptions.template, chatData);
  }
  static CHAT_TEMPLATE = "systems/mouseguard/templates/dice/roll.html";
};

// module/conflict-tracker.js
var ConflictTracker = class extends FormApplication {
  constructor(object = {}, options = {}) {
    super(object, options);
    this.isRunningQueue = false;
    if (options?.menu) {
      this.menu = options.menu;
    }
  }
  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      id: "conflict-tracker",
      classes: ["mouseguard"],
      title: "Conflict Tracker",
      template: "systems/mouseguard/templates/conflict-tracker.html"
    });
  }
  /** @override */
  getData() {
    const context = super.getData();
    context.isGM = game.user.isGM;
    const x = $(window).width();
    this.position.left = x / 2 - 505 / 2;
    this.position.top = 10;
    this.position.width = 150;
    this.position.height = 105;
    return context;
  }
  /** @override */
  async close(options = {}) {
  }
  /** @override */
  activateListeners(html2) {
  }
};

// module/mouse-combantant.js
var MouseCombatant = class extends Combatant {
  constructor(...args) {
    super(...args);
  }
  prepareDerivedData() {
    super.prepareDerivedData();
  }
  getData() {
    const context = super.getData();
    return context;
  }
  get ConflictCaptain() {
    return this.getFlag("mouseguard", "ConflictCaptain");
  }
  get team() {
    return this.getFlag("mouseguard", "Team");
  }
  async setConflictCaptain(value) {
    return this.setFlag("mouseguard", "ConflictCaptain", value);
  }
  async SetMove(move2) {
    this.setFlag("mouseguard", "Moves", move2);
  }
  async setTeam(value) {
    return this.setFlag("mouseguard", "Team", value);
  }
  async _preCreate(data, options, user) {
    await super._preCreate(data, options, user);
    let init2 = 0;
    let actor = game.actors.get(data.actorId);
    if (actor.type == "character") init2 = 1;
    this.updateSource({
      initiative: init2,
      flags: {
        mouseguard: {
          ConflictCaptain: false,
          Moves: [],
          Team: 0
        }
      }
    });
  }
  async doMove(id) {
    let Moves = this.getFlag("mouseguard", "Moves");
    let theMove = Moves.filter((item2) => item2.id == id);
    let template2 = "systems/mouseguard/templates/chat/combat-action.hbs";
    let data = { actor: [this.actor][0], move: theMove[0].move };
    var content = await renderTemplate(template2, data);
    let chatData = {
      user: game.user.id,
      speaker: ChatMessage.getSpeaker({ actor: data.actor }),
      flags: { "mouseguard.unflipped": true }
    };
    chatData.content = content;
    ChatMessage.create(chatData);
    let otherMoves = Moves.filter((item2) => item2.id !== id);
    this.SetMove(otherMoves);
  }
};

// module/socket.js
var MouseSocket = class {
  static async askGoal(data) {
    data.this = this;
    let dlg = await renderTemplate(
      "systems/mouseguard/templates/parts/conflict-manager.hbs",
      data
    );
    new Dialog({
      title: `Conflict Manager`,
      content: dlg,
      buttons: {
        ok: {
          label: "Apply",
          callback: async (html2) => {
            data.this.goalManager(html2, data);
          }
        },
        cancel: {
          label: "Cancel"
        }
      },
      default: "ok"
    }).render(true);
  }
  static async goalManager(html2, data) {
    let conflictGoal = html2.find("#conflict_goal")[0].value;
    let goalData = {
      action: "setGoal",
      combat: data.combat._id,
      goal: conflictGoal,
      team: data.team
    };
    if (game.user.isGM) {
      this.setGoal(goalData);
    } else {
      await game.socket.emit("system.mouseguard", goalData);
    }
  }
  static async setGoal(data) {
    if (game.user.isGM) {
      let combat = await game.combats.get(data.combat);
      combat.setGoal(data.goal, data.team);
    }
  }
  static async askMoves(data) {
    let dlg = await renderTemplate(
      "systems/mouseguard/templates/parts/conflict-move-manager.hbs",
      data
    );
    new Dialog({
      title: `Conflict Manager`,
      content: dlg,
      buttons: {
        ok: {
          label: game.i18n.localize("MOUSEGUARD.Send"),
          callback: async (html2) => {
            let error = false;
            let Move1Actor = html2.find("#move0-actor")[0].value;
            let Move1Move = html2.find(".move0:checked").val();
            let Move2Actor = html2.find("#move1-actor")[0].value;
            let Move2Move = html2.find(".move1:checked").val();
            let Move3Actor = html2.find("#move2-actor")[0].value;
            let Move3Move = html2.find(".move2:checked").val();
            let CombatantData = {
              [Move1Actor]: [],
              [Move2Actor]: [],
              [Move3Actor]: []
            };
            if (!!Move1Move == false) error = true;
            if (!!Move2Move == false) error = true;
            if (!!Move3Move == false) error = true;
            if (error) {
              ui.notifications.error(
                "An error occured while setting your moves. Please select new moves."
              );
              this.askMoves(data);
              return;
            }
            CombatantData[Move1Actor].push({
              id: randomID(),
              move: Move1Move,
              combatant: Move1Actor
            });
            CombatantData[Move2Actor].push({
              id: randomID(),
              move: Move2Move,
              combatant: Move2Actor
            });
            CombatantData[Move3Actor].push({
              id: randomID(),
              move: Move3Move,
              combatant: Move3Actor
            });
            let moveData = {
              action: "setMoves",
              combat: data.combat,
              data: CombatantData
            };
            if (game.user.isGM) {
              moveData.combat = data.combat;
              this.setMoves(moveData);
            } else {
              await game.socket.emit(
                "system.mouseguard",
                moveData
              );
            }
          }
        },
        cancel: {
          label: "Cancel"
        }
      },
      default: "ok"
    }).render(true);
  }
  static async moveManger(html2, data) {
  }
  static async setMoves(data) {
    if (game.user.isGM) {
      let combat = await game.combats.get(data.combat._id);
      let x = Object.keys(data.data).length;
      for (const key of Object.keys(data.data)) {
        let combatant = await combat.combatants.get(key);
        await combatant.setFlag("mouseguard", "Moves", data.data[key]);
      }
    }
  }
};

// module/mouse-combat.js
var MouseCombat = class extends Combat {
  constructor(object = {}, options = {}) {
    super(object, options);
  }
  /** @override */
  getData() {
    const context = super.getData();
    return context;
  }
  get getGoal1() {
    return this.getFlag("mouseguard", "goal1");
  }
  get getGoal2() {
    return this.getFlag("mouseguard", "goal2");
  }
  get getConflictCaptain() {
    return this.getFlag("mouseguard", "ConflictCaptain");
  }
  get getConflictCaptainTeam2() {
    return this.getFlag("mouseguard", "ConflictCaptain2");
  }
  async setConflictCaptain(value) {
    return this.setFlag("mouseguard", "ConflictCaptain", value);
  }
  async setConflictCaptainTeam2(value) {
    return this.setFlag("mouseguard", "ConflictCaptain2", value);
  }
  async _preCreate(data, options, user) {
    await super._preCreate(data, options, user);
    this.updateSource({
      flags: {
        mouseguard: {
          ConflictCaptain: null,
          ConflictCaptain2: null,
          goal1: null,
          goal2: null,
          team1Move: null,
          team2Move: null
        }
      }
    });
  }
  static _canUpdate(user, doc, data) {
    if (user.isGM) return true;
    const updateKeys = new Set(Object.keys(data));
    const allowedKeys = /* @__PURE__ */ new Set(["_id", "initiative", "flags"]);
    return updateKeys.isSubset(allowedKeys);
  }
  async startCombat() {
    let goal = this.flags.mouseguard.goal1;
    let goal2 = this.flags.mouseguard.goal2;
    let CC = this.flags.mouseguard.ConflictCaptain;
    let CC2 = this.flags.mouseguard.ConflictCaptain2;
    if (!CC) {
      ui.notifications.error(game.i18n.localize("COMBAT.NeedCC"));
      return false;
    }
    if (goal == null) {
      ui.notifications.error(game.i18n.localize("COMBAT.NeedGoal"));
      this.askGoal();
      return false;
    }
    if (goal2 == null) {
      ui.notifications.error(game.i18n.localize("COMBAT.NeedGoal"));
      this.askGoal();
      return false;
    }
    if (!!goal != false && !!goal2 != false && CC && CC2) {
      this.askMove();
      return this.update({ round: 1, turn: 0 });
    }
    return false;
  }
  getCCPlayerByID(conflictCaptainID) {
    let combatant = this.combatants.get(conflictCaptainID);
    let actor = game.actors.get(combatant.actorId);
    return game.users.filter(
      (u) => !u.isGM && actor.testUserPermission(u, "OWNER")
    )?.[0] ?? game.users.activeGM;
  }
  async askGoal() {
    let CC = this.flags.mouseguard.ConflictCaptain;
    let CC2 = this.flags.mouseguard.ConflictCaptain2;
    if (!CC) {
      ui.notifications.error("A Conflict Captain Must be set for team 1");
      return false;
    }
    if (!CC2) {
      ui.notifications.error("A Conflict Captain Must be set for team 2");
      return false;
    }
    let player = this.getCCPlayerByID(CC);
    await game.socket.emit(
      "system.mouseguard",
      { action: "askGoal", combat: this, team: "1" },
      { recipients: [player._id] }
    );
    let player2 = this.getCCPlayerByID(CC2);
    await game.socket.emit(
      "system.mouseguard",
      { action: "askGoal", combat: this, team: "2" },
      { recipients: [player2._id] }
    );
  }
  async setGoal(goal, team) {
    this.setFlag("mouseguard", "goal" + team, goal).then((content) => {
      this.startCombat();
    });
    return true;
  }
  // Create a list of combatants for each team then send the conflict captains the modal for moves
  // Filter by combatant.team
  // Need to refactor to include Captains for both teams
  async askMove() {
    let CC = this.flags.mouseguard.ConflictCaptain;
    let CC2 = this.flags.mouseguard.ConflictCaptain2;
    if (!CC) {
      ui.notifications.error(game.i18n.localize("COMBAT.NeedCC"));
      return false;
    }
    let data = { combat: this };
    let team1 = [];
    let team2 = [];
    let combatants = this.combatants.filter((comb) => comb.team == "1");
    Object.keys(combatants).forEach((key) => {
      team1.push({
        combatant: combatants[key].id,
        name: combatants[key].token.name
      });
    });
    data.actors = team1;
    data.action = "askMoves";
    let player = this.getCCPlayerByID(CC);
    await game.socket.emit("system.mouseguard", data, {
      recipients: [player._id]
    });
    let player2 = this.getCCPlayerByID(CC2);
    if (player2 == "undefined") {
      data.npc = true;
    }
    let team2combatants = this.combatants.filter(
      (comb) => comb.team == "2"
    );
    Object.keys(team2combatants).forEach((key) => {
      team2.push({
        combatant: team2combatants[key].id,
        name: team2combatants[key].token.name
      });
    });
    data.actors = team2;
    await game.socket.emit("system.mouseguard", data, {
      recipients: [player2._id]
    });
  }
  async askNPCMove(data) {
    MouseSocket.askMoves(data);
  }
  async nextRound() {
    this.askMove();
    super.nextRound();
  }
};

// module/mouse-combat-tracker.js
var MouseCombatTracker = class extends CombatTracker {
  constructor(options) {
    super(options);
  }
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "combat",
      template: "systems/mouseguard/templates/sidebar/combat-tracker.html",
      title: "COMBAT.SidebarTitle",
      scrollY: [".directory-list"],
      dragDrop: [
        {
          dragSelector: "li.combatant.actor.directory-item.flexrow",
          dropSelector: "li[data-team]"
        }
      ]
    });
  }
  _canDragStart(ev) {
    if (game.user.isGM) return true;
    return false;
  }
  _canDragDrop(ev) {
    if (game.user.isGM) return true;
    return false;
  }
  _onDragDrop(ev) {
    super._onDrop(ev);
  }
  async _onDrop(ev) {
    super._onDrop(ev);
    if (JSON.parse(ev.dataTransfer?.getData("text/plain")).id == "0") {
      return false;
    }
    let dropped_id = JSON.parse(ev.dataTransfer?.getData("text/plain")).id;
    let target = ev.target.closest("li").dataset.team;
    await this.viewed.combatants.get(dropped_id).setTeam(target);
  }
  _onDragStart(ev) {
    let valid = this.viewed.combatants.get(ev.target.dataset.combatantId);
    if (valid.flags.mouseguard.ConflictCaptain) {
      ui.notifications.error(game.i18n.localize("COMBAT.CCERROR"));
      ev.dataTransfer.setData(
        "text/plain",
        JSON.stringify({
          id: "0"
        })
      );
      return false;
    } else {
      ev.dataTransfer.setData(
        "text/plain",
        JSON.stringify({ id: ev.target.dataset.combatantId })
      );
    }
  }
  _getEntryContextOptions() {
    return [
      {
        name: "COMBAT.ConflictCaptain",
        icon: '<i class="fas fa-crown"></i>',
        callback: (li) => {
          const combatant = this.viewed.combatants.get(
            li.data("combatant-id")
          );
          let Team = "";
          if (combatant.team == 2) Team = "2";
          if (combatant.team == 0) return;
          console.log(Team);
          if (this.viewed.flags.mouseguard["ConflictCaptain" + Team] == combatant.id) {
            this.viewed.setFlag(
              "mouseguard",
              "ConflictCaptain" + Team,
              NaN
            );
            return combatant.setFlag(
              "mouseguard",
              "ConflictCaptain",
              false
            );
          }
          if (!!this.viewed.flags.mouseguard["ConflictCaptain" + Team] == false) {
            if (combatant) {
              this.viewed.setFlag(
                "mouseguard",
                "ConflictCaptain" + Team,
                li.data("combatant-id")
              );
              return combatant.setFlag(
                "mouseguard",
                "ConflictCaptain",
                true
              );
            }
          } else {
            ui.notifications.error(
              game.i18n.localize("COMBAT.CCSet")
            );
            return false;
          }
          console.log(this);
        }
      },
      {
        name: "COMBAT.CombatantUpdate",
        icon: '<i class="fas fa-edit"></i>',
        callback: this._onConfigureCombatant.bind(this)
      },
      {
        name: "Console.Log",
        icon: '<i class="fas fa-edit"></i>',
        callback: (li) => {
          const combatant = this.viewed.combatants.get(
            li.data("combatant-id")
          );
          if (combatant) console.log(combatant);
        }
      },
      {
        name: "COMBAT.CombatantRemove",
        icon: '<i class="fas fa-trash"></i>',
        callback: (li) => {
          const combatant = this.viewed.combatants.get(
            li.data("combatant-id")
          );
          if (combatant) return combatant.delete();
        }
      }
    ];
  }
  /**
   * Handle a Combatant control toggle
   * @private
   * @param {Event} event   The originating mousedown event
   */
  async _onCombatantControl(event2) {
    event2.preventDefault();
    event2.stopPropagation();
    const btn = event2.currentTarget;
    const li = btn.closest(".combatant");
    const combat = this.viewed;
    const c = combat.combatants.get(li.dataset.combatantId);
    switch (btn.dataset.control) {
      case "doMove":
        return c.doMove(btn.dataset.move);
      // Toggle combatant visibility
      case "toggleHidden":
        return c.update({ hidden: !c.hidden });
      // Toggle combatant defeated flag
      case "toggleDefeated":
        return this._onToggleDefeatedStatus(c);
      // Roll combatant initiative
      case "rollInitiative":
        return combat.rollInitiative([c.id]);
      // Actively ping the Combatant
      case "pingCombatant":
        return this._onPingCombatant(c);
    }
  }
  async getData(options) {
    let context = await super.getData(options);
    if (context.combat) {
      for (let [i, combatant] of context.combat.turns.entries()) {
        context.turns[i].flags = combatant.flags;
        context.turns[i].isFirstOwner = this.isFirstOwner(
          combatant.actor
        );
        context.turns[i].hasPlayerOwner = this.hasPlayerOwner(
          combatant.actor
        );
      }
    }
    return context;
  }
  firstOwner(doc) {
    if (!doc) return false;
    const gmOwners = Object.entries(doc.ownership).filter(
      ([id, level]) => game.users.get(id)?.isGM && game.users.get(id)?.active && level === 3
    ).map(([id, level]) => id);
    const otherOwners = Object.entries(doc.ownership).filter(
      ([id, level]) => !game.users.get(id)?.isGM && game.users.get(id)?.active && level === 3
    ).map(([id, level]) => id);
    if (otherOwners.length > 0) return game.users.get(otherOwners[0]);
    else return game.users.get(gmOwners[0]);
  }
  isFirstOwner(doc) {
    return game.user.id === this.firstOwner(doc).id;
  }
  hasPlayerOwner(doc) {
    if (!doc) return false;
    const gmOwners = Object.entries(doc.ownership).filter(
      ([id, level]) => game.users.get(id)?.isGM && game.users.get(id)?.active && level === 3
    ).map(([id, level]) => id);
    const otherOwners = Object.entries(doc.ownership).filter(
      ([id, level]) => !game.users.get(id)?.isGM && game.users.get(id)?.active && level === 3
    ).map(([id, level]) => id);
    if (otherOwners.length > 0) return true;
    else return false;
  }
};

// module/mouse-effects.js
var EffectsPanel = class extends Application {
  constructor(...args) {
    super(...args);
  }
  /**
   * Debounce and slightly delayed request to re-render this panel. Necessary for situations where it is not possible
   * to properly wait for promises to resolve before refreshing the UI.
   */
  refresh = foundry.utils.debounce(this.render, 100);
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      ...super.defaultOptions,
      id: "mouseguard-effects-panel",
      popOut: false,
      classes: ["mouseguard"],
      template: "systems/mouseguard/templates/effects/effects-panel.hbs"
    });
  }
  get token() {
    return canvas.tokens.controlled.at(0)?.document ?? null;
  }
  get actor() {
    return this.token?.actor ?? game.user?.character ?? null;
  }
  async getData() {
    let currentStatus = [];
    const { actor } = this;
    if (actor == null) return;
    const { token } = this;
    currentStatus = Array.from(actor.statuses);
    return { currentStatus };
  }
  async refresh(force) {
    return foundry.utils.debounce(this.render.bind(this, force), 100)();
  }
};

// module/svelte/MouseGuardConflictManager.svelte
function MouseGuardConflictManager($$anchor) {
}

// module/mouse-conflict-manager.js
var MouseConflictManager = class extends Application {
  constructor(...args) {
    super(...args);
  }
  app = null;
  dataStore = null;
  /**
   * Debounce and slightly delayed request to re-render this panel. Necessary for situations where it is not possible
   * to properly wait for promises to resolve before refreshing the UI.
   */
  refresh = foundry.utils.debounce(this.render, 100);
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      ...super.defaultOptions,
      id: "mouseguard-conflict-panel",
      classes: ["mouseguard"],
      template: "systems/mouseguard/templates/actor-sheetv2.html",
      width: 850,
      height: 600
    });
  }
  render(force = false, options = {}) {
    let sheetData = this.getData();
    if (this.app !== null) {
      let states = Application.RENDER_STATES;
      if (this._state == states.RENDERING || this._state == states.RENDERED) {
        this.dataStore?.set(sheetData);
        return;
      }
    }
    this._render(force, options).catch((err) => {
      err.message = `An error occurred while rendering ${this.constructor.name} ${this.appId}: ${err.message}`;
      console.error(err);
      this._state = Application.RENDER_STATES.ERROR;
    }).then((rendered) => {
      this.dataStore = writable(sheetData);
      this.app = new MouseGuardConflictManager({
        target: this.element.find("form").get(0),
        props: {
          dataStore: this.dataStore
          //name: 'world',
        }
      });
    });
    return this;
  }
  close(options = {}) {
    if (this.app != null) {
      this.app.$destroy();
      this.app = null;
      this.dataStore = null;
    }
    return super.close(options);
  }
};

// module/status-effects.js
var statusEffects = [
  {
    id: "sick",
    label: "MOUSEGUARD.sick",
    icon: "systems/mouseguard/assets/icons/sick.svg"
  },
  {
    id: "tired",
    label: "MOUSEGUARD.tired",
    icon: "systems/mouseguard/assets/icons/tired.svg"
  },
  {
    id: "hungthurst",
    label: "MOUSEGUARD.hungthurst",
    icon: "systems/mouseguard/assets/icons/hungthurst.svg"
  },
  {
    id: "injured",
    label: "MOUSEGUARD.injured",
    icon: "systems/mouseguard/assets/icons/injured.svg"
  },
  {
    id: "angry",
    label: "MOUSEGUARD.angry",
    icon: "systems/mouseguard/assets/icons/angry.svg"
  }
];

// module/mouseguard.js
Hooks.once("init", async function() {
  console.log(`Initializing MouseGuard MouseGuard System`);
  let RollCount = 0;
  let RollMessage = "";
  game.mouseguard = {
    MouseGuardActor,
    createMouseGuardMacro,
    RollCount,
    RollMessage,
    updateDisplay,
    MouseDie,
    MouseRoll,
    effectPanel: new EffectsPanel()
  };
  CONFIG.Actor.documentClass = MouseGuardActor;
  CONFIG.Item.documentClass = MouseGuardItem;
  CONFIG.Dice.rolls.push(MouseRoll);
  CONFIG.Combatant.documentClass = MouseCombatant;
  CONFIG.Combat.documentClass = MouseCombat;
  CONFIG.ui.combat = MouseCombatTracker;
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("mouseguard", MouseGuardNPCActorSheet, {
    types: ["mouse", "weasel", "animal"],
    makeDefault: true
  });
  console.log("Setting actor Sheet");
  Actors.registerSheet("mouseguard", MouseGuardActorSheet, {
    types: ["character"],
    makeDefault: true
  });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("mouseguard", MouseGuardItemSheet, {
    makeDefault: true
  });
  game.settings.register("mouseguard", "macroShorthand", {
    name: "SETTINGS.MouseGuardMacroShorthandN",
    hint: "SETTINGS.MouseGuardMacroShorthandL",
    scope: "world",
    type: Boolean,
    default: true,
    config: true
  });
  game.settings.register("mouseguard", "initFormula", {
    name: "SETTINGS.MouseGuardInitFormulaN",
    hint: "SETTINGS.MouseGuardInitFormulaL",
    scope: "world",
    type: String,
    default: "1d20",
    config: true,
    onChange: (formula) => _simpleUpdateInit(formula, true)
  });
  const initFormula = game.settings.get("mouseguard", "initFormula");
  _simpleUpdateInit(initFormula);
  function _simpleUpdateInit(formula, notify = false) {
    const isValid = Roll.validate(formula);
    if (!isValid) {
      if (notify)
        ui.notifications.error(
          `${game.i18n.localize(
            "MOUSEGUARD.NotifyInitFormulaInvalid"
          )}: ${formula}`
        );
      return;
    }
    CONFIG.Combat.initiative.formula = formula;
  }
  Handlebars.registerHelper("slugify", function(value) {
    return value.slugify({ strict: true });
  });
  await preloadHandlebarsTemplates();
});
Hooks.once("init", async function() {
  CONFIG.Dice.terms["m"] = MouseDie;
  CONFIG.Dice.terms["6"] = MouseDie;
  game.socket.on("system.mouseguard", (data) => {
    if (data.action === "askGoal") MouseSocket.askGoal(data);
    if (data.action === "setGoal") MouseSocket.setGoal(data);
    if (data.action === "askMoves") MouseSocket.askMoves(data);
    if (data.action === "setMoves") MouseSocket.setMoves(data);
  });
  await registerTours();
});
Hooks.once("diceSoNiceReady", (dice3d) => {
  let dicetheme = "mouseguard";
  if (!dicetheme || dicetheme == "mouseguard") {
    dice3d.addSystem({ id: "mouseguard", name: "Mouse Guard" }, true);
    dice3d.addDicePreset(
      {
        type: "dm",
        labels: [
          "systems/mouseguard/assets/dice/snake.png",
          "systems/mouseguard/assets/dice/snake.png",
          "systems/mouseguard/assets/dice/snake.png",
          "systems/mouseguard/assets/dice/sword.png",
          "systems/mouseguard/assets/dice/sword.png",
          "systems/mouseguard/assets/dice/axe.png"
        ],
        colorset: "white",
        system: "mouseguard"
      },
      "d6"
    );
  }
  dice3d.addColorset({
    name: "white-mg",
    description: "Mouse Guard white",
    category: "Colors",
    foreground: "#000000",
    background: "#ffffff",
    outline: "black",
    texture: "none",
    material: "plastic"
  });
});
Hooks.on("renderSidebarTab", (app, html2, data) => {
  const template2 = "./systems/mouseguard/templates/mousetray.html";
  let $chat_form = html2.find("#chat-form");
  renderTemplate(template2).then((c) => {
    let $content = $(c);
    $chat_form.after($content);
    $content.find(".mouse_dice_button").on("click", (event2) => {
      event2.preventDefault();
      if (event2.currentTarget.classList.contains("add")) {
        game.mouseguard.RollCount++;
      } else {
        game.mouseguard.RollCount--;
      }
      if (game.mouseguard.RollCount < 1) game.mouseguard.RollCount = 0;
      updateDisplay(game.mouseguard.RollCount);
    });
    $content.find(".mouse_roll_button").on("click", (event2) => {
      event2.preventDefault();
      let $self = $(event2.currentTarget);
      let dataset = event2.currentTarget.dataset;
      if (game.mouseguard.RollCount > 0) {
        let actor = game.user.character ?? canvas.tokens.controlled[0]?.actor;
        var roll = new MouseRoll(game.mouseguard.RollCount + "dmcs>3");
        roll.evaluate({ async: true });
        roll.toMessage({
          user: game.user.id,
          flavor: game.mouseguard.RollMessage,
          speaker: ChatMessage.getSpeaker({ actor })
        });
        game.mouseguard.RollCount = 0;
        game.mouseguard.RollMessage = "";
        updateDisplay(0);
      }
    });
    updateDisplay(game.mouseguard.RollCount);
  });
});
Hooks.once("ready", async () => {
  let tourRolls = game.user.getFlag("mouseguard", "tourRolls");
  if (tourRolls == void 0) {
    const tour = game.tours.get("mouseguard.welcome");
    tour.start();
    game.user.setFlag("mouseguard", "tourRolls", 1);
  }
  Hooks.on(
    "controlToken",
    game.mouseguard.effectPanel.refresh.bind(
      game.mouseguard.effectPanel,
      true
    )
  );
  for (const hook of [
    "createActiveEffect",
    "updateActiveEffect",
    "deleteActiveEffect"
  ]) {
    Hooks.on(hook, function(effect2) {
      if (effect2.parent === game.mouseguard.effectPanel.actor)
        game.mouseguard.effectPanel.refresh(true);
    });
  }
});
Hooks.on("renderChatMessage", (chatMessage, [html2], messageData) => {
  if (messageData.message.flags?.mouseguard?.unflipped) {
    html2.querySelector("img").src = "systems/mouseguard/assets/deck/CardBack.webp";
    if (game.user.isGM) {
      html2.querySelector(".action-move").insertAdjacentHTML(
        "beforeend",
        ' <button id="reveal-button" type="button">Reveal Card</button> '
      );
      html2.querySelector("#reveal-button").addEventListener(
        "click",
        (event2) => {
          let message = game.messages.get(
            event2.target.closest("li").dataset.messageId
          );
          message.setFlag("mouseguard", "unflipped", false);
        }
      );
    }
  }
});
Hooks.on("canvasReady", () => {
  game.mouseguard.effectPanel.render(true);
});
Hooks.once("setup", () => {
  CONFIG.statusEffects = statusEffects;
});
async function registerTours() {
  try {
    game.tours.register(
      "mouseguard",
      "welcome",
      await SidebarTour.fromJSON("/systems/mouseguard/tours/welcome.json")
    );
  } catch (err) {
    console.error(err);
  }
}
function updateDisplay(count) {
  let diceHTML = '<li class="roll mousedie d6"><img src="systems/mouseguard/assets/dice/sword.png" height="24" width="24"></li>';
  let theHTML = "";
  for (let i = 0; i < count; i++) {
    theHTML += diceHTML;
  }
  $(".mouse-dice-roll").html(theHTML);
  $(".mouse_dice_button.subtract").prop("disabled", !count);
  $(".mouse_roll_button").prop("disabled", !count);
  if (!count) game.mouseguard.RollMessage = "";
}
Handlebars.registerHelper("times", function(n, block2) {
  var accum = "";
  for (var i = 0; i < n; ++i) accum += block2.fn(i);
  return accum;
});
Handlebars.registerHelper("concat", function() {
  var outStr = "";
  for (var arg in arguments) {
    if (typeof arguments[arg] != "object") {
      outStr += arguments[arg];
    }
  }
  return outStr;
});
Handlebars.registerHelper("ifEquals", function(arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});
//# sourceMappingURL=mouseguard.js.map
