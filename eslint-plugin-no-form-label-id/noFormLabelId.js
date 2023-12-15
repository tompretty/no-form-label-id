module.exports = {
  meta: {
    messages: {
      noFormLabelId: "Don't pass an 'id' prop to the FormLabel component",
    },
  },
  create: (context) => ({
    JSXOpeningElement: (node) => {
      if (node.name.name !== "FormLabel") {
        return;
      }

      const attributes = node.attributes.map((attr) => attr.name.name);

      if (!attributes.includes("id")) {
        return;
      }

      context.report({
        node,
        messageId: "noFormLabelId",
      });
    },
  }),
};
