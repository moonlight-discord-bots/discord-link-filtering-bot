module.exports = {
  escapeMarkdown: text => {
    return text.replace(/(`|\*|_)/gmi, '\\$1')
  },

  parseMention: mention => {
      return mention.replace(/\D/gmi, '')
  }
}
