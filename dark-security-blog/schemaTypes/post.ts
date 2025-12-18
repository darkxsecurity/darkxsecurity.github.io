import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    // --- BURADAN BAŞLA ---
    defineField({
      name: 'icon',
      title: 'İkon (Emoji)',
      type: 'string',
      description: 'Örn: 🧅, 🚀, 💻',
    }),
    defineField({
      name: 'readTime',
      title: 'Okuma Süresi',
      type: 'string',
      description: 'Örn: 28 dk okuma',
    }),
    defineField({
      name: 'excerpt',
      title: 'Kısa Özet',
      type: 'text',
      rows: 3,
      description: 'Kartta görünecek kısa açıklama.',
    }),
    // --- BURADA BİTİR ---
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
