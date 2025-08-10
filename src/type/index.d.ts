interface CategoryItem {
  id: string;
  name: string;
  icon?: React.ReactNode;
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