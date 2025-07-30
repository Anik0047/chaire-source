export interface ICategoryInterface {
    _id?: any;
    category_name?: string;
    category_slug?: string;
    category_logo?: string;
    category_logo_key?: string;
    category_banner?: string[];
    category_status?: "active" | "in-active";
    category_serial?: number;
    //   category_publisher_id?: string | IAdminInterface;
    //   category_updated_by?: string | IAdminInterface;

    category_is_featured_show?: boolean;
}

export interface ISubcategoryInterface {
    _id?: any;
    category_id?: string | ICategoryInterface; // Reference to ICategoryInterface
    subcategory_name?: string;
    subcategory_slug?: string;
    subcategory_logo?: string;
    subcategory_logo_key?: string;
    subcategory_banner?: string[];
    subcategory_status?: "active" | "in-active";
    subcategory_serial?: number;
    //   subcategory_publisher_id?: string | IAdminInterface;
    //   subcategory_updated_by?: string | IAdminInterface;

    subcategory_is_featured_show?: boolean;
}

export type IAttribute = {
    _id?: any;
    attribute_name?: string;
    attribute_status?: "active" | "in-active";
    attribute_serial?: number;
    // attribute_publisher_id?: string | IAdminInterface;
    // attribute_updated_by?: string | IAdminInterface;
    category_id?: string | ICategoryInterface; // Reference to ICategoryInterface
    subcategory_id?: string | ISubcategoryInterface; // Reference to ISubcategoryInterface
    attribute_values?: {
        attribute_value_name: string;
        attribute_value_code?: string;
        attribute_value_status: "active" | "in-active";
        _id?: string;
    }[];
};

export type IStaff = {
    _id?: any;
    admin_password: string;
    admin_name: string;
    admin_phone: string;
    admin_address?: string;
    admin_profile?: string;
    admin_profile_key?: string;
    admin_status: "active" | "in-active";
    // staff_publisher_id?: Types.ObjectId | IAdminInterface;
    // staff_updated_by?: Types.ObjectId | IAdminInterface;
}

export interface IBanner {
    _id?: any;
    banner_title?: string;
    banner_image?: string;
    banner_image_key?: string;
    banner_status: "active" | "in-active";
    banner_path?: string;
    banner_serial: number;
    //   banner_publisher_id?: Types.ObjectId | IAdminInterface;
    //   banner_updated_by?: Types.ObjectId | IAdminInterface;
};

interface attribute_valuesArray {
    attribute_value_name?: string;
}

export interface attributesArray {
    attribute_name?: string;
    attribute_values?: attribute_valuesArray[];
}

export interface additionalImagesArray {
    additional_image?: string;
    additional_image_key?: string;
}

export interface metakeywordssArray {
    keyword?: string;
}

export interface IProductInterface {
    _id?: any;
    product_name: string;
    product_slug: string;
    product_sku?: string;
    product_status: "active" | "in-active";
    category_id: string | ICategoryInterface;
    subcategory_id?: string | ISubcategoryInterface;
    barcode?: string;
    barcode_image?: string;
    description: string;
    thumbnail_image: string;
    thumbnail_image_key?: string;
    additional_images?: additionalImagesArray[];
    product_price?: number;
    product_production_cost?: number;
    // product_buying_price?: number;
    product_discount_price?: number | undefined | null;
    product_quantity?: number | undefined | null;
    product_alert_quantity?: number;
    product_warrenty?: string;
    product_return?: string;
    unit?: string;
    unit_quantity?: number;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: metakeywordssArray[];
    product_delivery_time?: string;
    product_is_delivery_dhaka_only?: boolean;
    popular_product_show?: boolean
    bestselling_product_show?: boolean
    product_order_count?: number;
    offered_product_show?: boolean
    //   product_publisher_id?: string | IAdminInterface;
    //   product_updated_by?: string | IAdminInterface;
    video_url?: string;
    discount_show: ''; //'flat' | 'percent'

    attributes_details?: attributesArray[];
    is_variation?: true | false;
}