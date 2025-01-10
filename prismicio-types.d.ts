// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice =
  | ImageTextSlice
  | FooterSlice
  | VideoSlice
  | GallerySlice
  | RoomsSlice
  | HeroSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

type RoomDocumentDataSlicesSlice = RoomSlice;

/**
 * Content for Room documents
 */
interface RoomDocumentData {
  /**
   * Slice Zone field in *Room*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: room.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<RoomDocumentDataSlicesSlice> /**
   * Meta Title field in *Room*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: room.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Room*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: room.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Room*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: room.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Room document from Prismic
 *
 * - **API ID**: `room`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type RoomDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<RoomDocumentData>, "room", Lang>;

interface SettingsDocumentData {}

/**
 * settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes = HomeDocument | RoomDocument | SettingsDocument;

/**
 * Primary content in *Footer → Default → Primary*
 */
export interface FooterSliceDefaultPrimary {
  /**
   * label field in *Footer → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * logo field in *Footer → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Footer*
 */
type FooterSliceVariation = FooterSliceDefault;

/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: Footer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSlice = prismic.SharedSlice<"footer", FooterSliceVariation>;

/**
 * Item in *Gallery → Default → Primary → Imagenes*
 */
export interface GallerySliceDefaultPrimaryImagenesItem {
  /**
   * Imagen field in *Gallery → Default → Primary → Imagenes*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.default.primary.imagenes[].imagen
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagen: prismic.ImageField<never>;
}

/**
 * Primary content in *Gallery → Default → Primary*
 */
export interface GallerySliceDefaultPrimary {
  /**
   * Titulo field in *Gallery → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Parrafo field in *Gallery → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.default.primary.parrafo
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  parrafo: prismic.RichTextField;

  /**
   * Imagenes field in *Gallery → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.default.primary.imagenes[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  imagenes: prismic.GroupField<
    Simplify<GallerySliceDefaultPrimaryImagenesItem>
  >;
}

/**
 * Default variation for Gallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GallerySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Gallery*
 */
type GallerySliceVariation = GallerySliceDefault;

/**
 * Gallery Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: Gallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySlice = prismic.SharedSlice<
  "gallery",
  GallerySliceVariation
>;

/**
 * Item in *Hero → Default → Primary → Videos*
 */
export interface HeroSliceDefaultPrimaryVideosItem {
  /**
   * Video field in *Hero → Default → Primary → Videos*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.videos[].video
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  video: prismic.LinkToMediaField;
}

/**
 * Item in *Hero → Default → Primary → Parrafos*
 */
export interface HeroSliceDefaultPrimaryParrafosItem {
  /**
   * Parrafo field in *Hero → Default → Primary → Parrafos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.parrafos[].parrafo
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  parrafo: prismic.RichTextField;
}

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Titulo field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.titulo
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titulo: prismic.RichTextField;

  /**
   * Imagen field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.imagen
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagen: prismic.ImageField<never>;

  /**
   * Videos field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.videos[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  videos: prismic.GroupField<Simplify<HeroSliceDefaultPrimaryVideosItem>>;

  /**
   * Parrafos field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.parrafos[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  parrafos: prismic.GroupField<Simplify<HeroSliceDefaultPrimaryParrafosItem>>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *ImageText → Default → Primary*
 */
export interface ImageTextSliceDefaultPrimary {
  /**
   * title field in *ImageText → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_text.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *ImageText → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_text.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * image field in *ImageText → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_text.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ImageText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageText*
 */
type ImageTextSliceVariation = ImageTextSliceDefault;

/**
 * ImageText Shared Slice
 *
 * - **API ID**: `image_text`
 * - **Description**: ImageText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageTextSlice = prismic.SharedSlice<
  "image_text",
  ImageTextSliceVariation
>;

/**
 * Item in *Room → Default → Primary → Caracteristicas*
 */
export interface RoomSliceDefaultPrimaryCaracteristicasItem {
  /**
   * Caracteristica field in *Room → Default → Primary → Caracteristicas*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: room.default.primary.caracteristicas[].caracteristica
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  caracteristica: prismic.KeyTextField;
}

/**
 * Item in *Room → Default → Primary → Fotos*
 */
export interface RoomSliceDefaultPrimaryFotosItem {
  /**
   * Foto field in *Room → Default → Primary → Fotos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: room.default.primary.fotos[].foto
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foto: prismic.ImageField<never>;
}

/**
 * Primary content in *Room → Default → Primary*
 */
export interface RoomSliceDefaultPrimary {
  /**
   * Titulo field in *Room → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: room.default.primary.titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Descripción field in *Room → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: room.default.primary.descripcion
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descripcion: prismic.KeyTextField;

  /**
   * Caracteristicas field in *Room → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: room.default.primary.caracteristicas[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  caracteristicas: prismic.GroupField<
    Simplify<RoomSliceDefaultPrimaryCaracteristicasItem>
  >;

  /**
   * Miniatura field in *Room → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: room.default.primary.miniatura
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  miniatura: prismic.ImageField<never>;

  /**
   * Fotos field in *Room → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: room.default.primary.fotos[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  fotos: prismic.GroupField<Simplify<RoomSliceDefaultPrimaryFotosItem>>;
}

/**
 * Default variation for Room Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RoomSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RoomSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Room*
 */
type RoomSliceVariation = RoomSliceDefault;

/**
 * Room Shared Slice
 *
 * - **API ID**: `room`
 * - **Description**: Room
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RoomSlice = prismic.SharedSlice<"room", RoomSliceVariation>;

/**
 * Primary content in *Rooms → Default → Primary*
 */
export interface RoomsSliceDefaultPrimary {
  /**
   * Titulo field in *Rooms → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rooms.default.primary.titulo
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titulo: prismic.RichTextField;

  /**
   * Parrafo field in *Rooms → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rooms.default.primary.parrafo
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  parrafo: prismic.RichTextField;

  /**
   * Habitaciones field in *Rooms → Default → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: rooms.default.primary.habitaciones
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  habitaciones: prismic.ContentRelationshipField<"room">;
}

/**
 * Default variation for Rooms Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RoomsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RoomsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Rooms*
 */
type RoomsSliceVariation = RoomsSliceDefault;

/**
 * Rooms Shared Slice
 *
 * - **API ID**: `rooms`
 * - **Description**: Rooms
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RoomsSlice = prismic.SharedSlice<"rooms", RoomsSliceVariation>;

/**
 * Primary content in *Video → Default → Primary*
 */
export interface VideoSliceDefaultPrimary {
  /**
   * title field in *Video → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * urlYoutube field in *Video → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video.default.primary.urlyoutube
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  urlyoutube: prismic.KeyTextField;

  /**
   * video field in *Video → Default → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: video.default.primary.video
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  video: prismic.LinkToMediaField;

  /**
   * image field in *Video → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: video.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Video Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VideoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Video*
 */
type VideoSliceVariation = VideoSliceDefault;

/**
 * Video Shared Slice
 *
 * - **API ID**: `video`
 * - **Description**: Video
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSlice = prismic.SharedSlice<"video", VideoSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      RoomDocument,
      RoomDocumentData,
      RoomDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      FooterSlice,
      FooterSliceDefaultPrimary,
      FooterSliceVariation,
      FooterSliceDefault,
      GallerySlice,
      GallerySliceDefaultPrimaryImagenesItem,
      GallerySliceDefaultPrimary,
      GallerySliceVariation,
      GallerySliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimaryVideosItem,
      HeroSliceDefaultPrimaryParrafosItem,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ImageTextSlice,
      ImageTextSliceDefaultPrimary,
      ImageTextSliceVariation,
      ImageTextSliceDefault,
      RoomSlice,
      RoomSliceDefaultPrimaryCaracteristicasItem,
      RoomSliceDefaultPrimaryFotosItem,
      RoomSliceDefaultPrimary,
      RoomSliceVariation,
      RoomSliceDefault,
      RoomsSlice,
      RoomsSliceDefaultPrimary,
      RoomsSliceVariation,
      RoomsSliceDefault,
      VideoSlice,
      VideoSliceDefaultPrimary,
      VideoSliceVariation,
      VideoSliceDefault,
    };
  }
}
