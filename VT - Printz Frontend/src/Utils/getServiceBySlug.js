// src/utils/getServiceBySlug.js

import { servicesData } from "../data/ServiceData";

export const getServiceBySlug = (slug) => {
  for (const category of servicesData) {
    const service = category.services.find(
      (item) => item.slug === slug
    );
    if (service) {
      return { ...service, category: category.category };
    }
  }
  return null;
};
