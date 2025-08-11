interface CategoryItem {
  id: string;
  name: string;
  image?: StaticImageData | string;
  subcategories?: CategoryItem[];
}


interface TabContent {
  id: string;
  title: string;
  content: React.ReactNode;
}


interface CardData {
  title: string;
  content: React.ReactNode;
  buttonLabel: string;
  buttonIcon?: React.ReactNode;
  buttonBg?: string;
}

interface TabData {
  id: string;
  label: string;
  title: string;
  content: string;
  features?: string[];
  buttonText?: string;
}