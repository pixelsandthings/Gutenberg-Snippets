wp.domReady(() => {

      // Blockquote Styles
      wp.blocks.unregisterBlockStyle('core/quote', ['default', 'large']);

      // Pullquote Styles
      wp.blocks.unregisterBlockStyle('core/pullquote', ['default', 'solid-color']);

      // Image Styles
      wp.blocks.unregisterBlockStyle('core/image', ['default', 'rounded']);

      // Button Styles
      wp.blocks.unregisterBlockStyle('core/button', ['default', 'outline', 'squared', 'fill']);
      wp.blocks.unregisterBlockStyle('core/button', 'outline');

      // Separator Styles
      wp.blocks.unregisterBlockStyle('core/button', ['default', 'wide', 'dots']);

      // Table Styles
      wp.blocks.unregisterBlockStyle('core/table', ['default', 'regular', 'stripes']);

      // Social Link Styles
      wp.blocks.unregisterBlockStyle('core/social-links', ['default', 'logos-only', 'pill-shape']);

});
