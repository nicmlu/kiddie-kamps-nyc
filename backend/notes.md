# camps have reviews with ratings

# camp model (has_Many comments)

- img_src: string
- name: string
- street_address: string
- city: string
- zip: integer
- phone: string

# Review model

- camp_id: integer (belongs to a camp)
- comment: text
- rating: integer

# Associations

- Camp has many Reviews
- A Review belongs to a Camp
