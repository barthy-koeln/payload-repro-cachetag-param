import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  hooks: {
    afterRead: [
      ({ doc }) => {
        return {
          ...doc,
          thumbnailURL: `/_next/image?url=${doc.url}&w=384&q=75`
          // FIXME use this to verify that only the cacheTag is causing the issue
          // thumbnailURL: `/_next/image?url=${doc.url}&w=384&q=75&cacheTag=`
        }
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
