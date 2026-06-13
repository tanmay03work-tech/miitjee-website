-- Create buckets for storage
insert into storage.buckets (id, name, public) values ('neet-mock-papers', 'neet-mock-papers', true);
insert into storage.buckets (id, name, public) values ('miitjee-results', 'miitjee-results', true);
insert into storage.buckets (id, name, public) values ('miitjee-gallery', 'miitjee-gallery', true);
insert into storage.buckets (id, name, public) values ('miitjee-faculty', 'miitjee-faculty', true);

-- Policies to allow public read access
-- Note: RLS on storage.objects is managed by Supabase internally
create policy "Public Access neet-mock-papers"
on storage.objects for select using ( bucket_id = 'neet-mock-papers' );

create policy "Public Access miitjee-results"
on storage.objects for select using ( bucket_id = 'miitjee-results' );

create policy "Public Access miitjee-gallery"
on storage.objects for select using ( bucket_id = 'miitjee-gallery' );

create policy "Public Access miitjee-faculty"
on storage.objects for select using ( bucket_id = 'miitjee-faculty' );

-- Optional: Policies for admin to insert/update/delete (assuming role authenticated)
create policy "Admin upload neet-mock-papers"
on storage.objects for insert with check ( bucket_id = 'neet-mock-papers' and auth.role() = 'authenticated' );

create policy "Admin upload miitjee-results"
on storage.objects for insert with check ( bucket_id = 'miitjee-results' and auth.role() = 'authenticated' );

create policy "Admin upload miitjee-gallery"
on storage.objects for insert with check ( bucket_id = 'miitjee-gallery' and auth.role() = 'authenticated' );

create policy "Admin upload miitjee-faculty"
on storage.objects for insert with check ( bucket_id = 'miitjee-faculty' and auth.role() = 'authenticated' );
