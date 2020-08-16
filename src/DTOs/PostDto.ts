export default interface PostDTO {
  id: string;
  url: string;
  title: string;
  author: string;
  thumbnail: string | 'self';
  link_flair_background_color: string;
  link_flair_text_color: string;
  link_flair_text: string;
  created: number;
  formattedDate: number;
  domain: string;
}
