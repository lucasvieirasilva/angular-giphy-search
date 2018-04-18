export interface Giphy {
  id: string;
  url: string;
  images: Images;
}

export interface Images {
    fixed_height: FixedHeight
}

export interface FixedHeight {
  url: string;
}
