import { pgTable, serial, text, timestamp, date, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const bentos = pgTable('bentos', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
  memo: text('memo'),
  photoUrl: text('photo_url'),
  date: date('date').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  mood: text('mood'),
  colorScore: integer('color_score'),
});

export const tags = pgTable('tags', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
});

export const bentoTags = pgTable('bento_tags', {
  id: serial('id').primaryKey(),
  bentoId: integer('bento_id').notNull().references(() => bentos.id, { onDelete: 'cascade' }),
  tagId: integer('tag_id').notNull().references(() => tags.id, { onDelete: 'cascade' }),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  bentos: many(bentos),
  tags: many(tags),
}));

export const bentosRelations = relations(bentos, ({ one, many }) => ({
  user: one(users, {
    fields: [bentos.userId],
    references: [users.id],
  }),
  bentoTags: many(bentoTags),
}));

export const tagsRelations = relations(tags, ({ one, many }) => ({
  user: one(users, {
    fields: [tags.userId],
    references: [users.id],
  }),
  bentoTags: many(bentoTags),
}));

export const bentoTagsRelations = relations(bentoTags, ({ one }) => ({
  bento: one(bentos, {
    fields: [bentoTags.bentoId],
    references: [bentos.id],
  }),
  tag: one(tags, {
    fields: [bentoTags.tagId],
    references: [tags.id],
  }),
})); 