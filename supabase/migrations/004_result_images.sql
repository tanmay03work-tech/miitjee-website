-- Create result_images table
CREATE TABLE result_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  photo_url TEXT NOT NULL,
  category TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE result_images ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public read result_images"
  ON result_images FOR SELECT USING (is_published = TRUE);

CREATE POLICY "Admin read result_images"
  ON result_images FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admin manage result_images"
  ON result_images FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

-- Insert seed data
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('2nd rank city topper', '/assets/results/snapshots_2026/2nd_rank_city_topper.jpg', 'snapshots_2026', 0);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('3RD RANK CITY TOPPER', '/assets/results/snapshots_2026/3RD_RANK_CITY_TOPPER.jpg', 'snapshots_2026', 1);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-15 at 19.19.46  1', '/assets/results/snapshots_2026/WhatsApp_Image_2026-06-15_at_19.19.46__1_.jpeg', 'snapshots_2026', 2);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-15 at 19.19.46', '/assets/results/snapshots_2026/WhatsApp_Image_2026-06-15_at_19.19.46.jpeg', 'snapshots_2026', 3);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-15 at 19.19.54  1', '/assets/results/snapshots_2026/WhatsApp_Image_2026-06-15_at_19.19.54__1_.jpeg', 'snapshots_2026', 4);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-15 at 19.19.54  3', '/assets/results/snapshots_2026/WhatsApp_Image_2026-06-15_at_19.19.54__3_.jpeg', 'snapshots_2026', 5);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-15 at 19.19.55  1', '/assets/results/snapshots_2026/WhatsApp_Image_2026-06-15_at_19.19.55__1_.jpeg', 'snapshots_2026', 6);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-15 at 19.19.55', '/assets/results/snapshots_2026/WhatsApp_Image_2026-06-15_at_19.19.55.jpeg', 'snapshots_2026', 7);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.46.00', '/assets/results/snapshots_2026/WhatsApp_Image_2026-06-16_at_09.46.00.jpeg', 'snapshots_2026', 8);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 10.31.08', '/assets/results/snapshots_2026/WhatsApp_Image_2026-06-16_at_10.31.08.jpeg', 'snapshots_2026', 9);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 10.31.09', '/assets/results/snapshots_2026/WhatsApp_Image_2026-06-16_at_10.31.09.jpeg', 'snapshots_2026', 10);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.40  1', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.40__1_.jpeg', 'newspaper_headlines', 0);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.40', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.40.jpeg', 'newspaper_headlines', 1);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.41', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.41.jpeg', 'newspaper_headlines', 2);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.42', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.42.jpeg', 'newspaper_headlines', 3);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.44', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.44.jpeg', 'newspaper_headlines', 4);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.45', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.45.jpeg', 'newspaper_headlines', 5);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.46  1', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.46__1_.jpeg', 'newspaper_headlines', 6);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.46', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.46.jpeg', 'newspaper_headlines', 7);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.47  1', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.47__1_.jpeg', 'newspaper_headlines', 8);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.47', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.47.jpeg', 'newspaper_headlines', 9);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.48', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.48.jpeg', 'newspaper_headlines', 10);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.49  1', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.49__1_.jpeg', 'newspaper_headlines', 11);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.49', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.49.jpeg', 'newspaper_headlines', 12);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.50', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.50.jpeg', 'newspaper_headlines', 13);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.56', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.56.jpeg', 'newspaper_headlines', 14);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.57  1', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.57__1_.jpeg', 'newspaper_headlines', 15);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.57', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.57.jpeg', 'newspaper_headlines', 16);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.58', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.58.jpeg', 'newspaper_headlines', 17);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.45.59', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.45.59.jpeg', 'newspaper_headlines', 18);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.46.00  1', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.46.00__1_.jpeg', 'newspaper_headlines', 19);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.46.04', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.46.04.jpeg', 'newspaper_headlines', 20);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.46.08', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.46.08.jpeg', 'newspaper_headlines', 21);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.46.09', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.46.09.jpeg', 'newspaper_headlines', 22);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.46.11  1', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.46.11__1_.jpeg', 'newspaper_headlines', 23);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('WhatsApp Image 2026-06-16 at 09.46.13', '/assets/results/newspaper_headlines/WhatsApp_Image_2026-06-16_at_09.46.13.jpeg', 'newspaper_headlines', 24);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('2019 Result', '/assets/results/jee/2019_Result.jpg', 'jee', 0);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('2020', '/assets/results/jee/2020.jpg', 'jee', 1);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('2022 JEE-main', '/assets/results/jee/2022_JEE-main.jpeg', 'jee', 2);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('IITJEE20-21', '/assets/results/jee/IITJEE20-21.jpg', 'jee', 3);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('JeeMain2020', '/assets/results/jee/JeeMain2020.jpg', 'jee', 4);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('2018', '/assets/results/neet/2018.jpg', 'neet', 0);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('2020', '/assets/results/neet/2020.jpg', 'neet', 1);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('Neet-1', '/assets/results/neet/Neet-1.jpg', 'neet', 2);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('NEET', '/assets/results/neet/NEET.jpg', 'neet', 3);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('search', '/assets/results/neet/search.png', 'neet', 4);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('10th', '/assets/results/boards/10th.jpg', 'boards', 0);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('12 TH TOPPER', '/assets/results/boards/12_TH_TOPPER.jpg', 'boards', 1);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('12th board Result-2', '/assets/results/boards/12th_board_Result-2.jpg', 'boards', 2);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('12th board Result', '/assets/results/boards/12th_board_Result.jpg', 'boards', 3);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('our top scorer 12th board', '/assets/results/boards/our_top_scorer_12th_board.jpg', 'boards', 4);
INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('page 1-', '/assets/results/boards/page_1-.jpg', 'boards', 5);
