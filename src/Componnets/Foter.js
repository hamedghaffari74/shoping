import React from 'react'
import melat from '../image/melat.jpg'
import up from '../image/up.png'
const Foter = () => {
  return (
    <div>
       <section class="mt-5 .border-box">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-1 ">
          <h5 class=" text-white section-border-3"> نهایی</h5>
        </div>
        <div class="fw-bold col-md-5">
          <h3>تسویه حساب  و ارسال کالا</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">

          <h5 class="fw-bold mt-4">هزینه قابل پرداخت</h5>

          <div class="row gy-5">
            <div class="col-md-6">
              <label for="tedad"> تعداد</label>
            </div>
            <div class="col-md-6">
              <select class="form-select" name="tedad">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>

          <div class="row">
            <p>محصول</p>
          </div>
          <div class="row mb-4">
            <div class="col-md-6">
              <p>قیمت واحد</p>
            </div>
            <div class="col-md-6">
              <p>تومان</p>
            </div>
          </div>
          <div class="row mt-5 ">
            <div class="col-md-6">
              <p>قیمت نهایی</p>
            </div>
            <div class="col-md-6">
              <input class="form-control " type="text" placeholder="مبلغ به تومان می باشد"/>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-6"><img src={melat} class=" img-fluid  " alt="..."/></div>
            <div class="col-md-6"><img src={up} class=" img-fluid  " width="130" alt="..."/></div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-3">
              <label for=""> کد امنیتی:</label>
            </div>
            <div class="col-md-3"><input class="form-control" type="text"/></div>
            <div class="row">
              <p>مایل هستم به خیریه کودکان مبتلا به سرطان کمک کنم مبلغ</p>
            </div>
            <div class="row">
              <p>هدیه</p>
            </div>
            <div class="row"><select name="" id="">
                <option value="">فعلا مایل نیستم</option>
                <option value="">2000</option>
                <option value="">3000</option>
                <option value="">4000</option>
                <option value="">5000</option>
                <option value="">6000</option>
                <option value="">7000</option>
                <option value="">8000</option>
                <option value="">9000</option>
                <option value="">10000</option>
              </select>
            </div>
            <div class="row">
              <button type="button" class="col-md-4 justify-content-center btn btn-success mt-4  ">خرید</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <i class="bi bi-lightbulb icon-lamp"> </i><br />
            <p class="fw-bold">راهنما</p>
            <br />
            <p class="fw-light  ">کلیه کارت های بانکی عضو شبکه شتاب برای تمامی بانک ها امکان پرداخت دارند.
              کارت ها کاملا اصلی و با اسکن میباشد<br />. مراقب گیفت کارت های ارزان باشید، دچار مشکل خواهند شد و اکانت شما
              پس از مدتی بلاک میشود.
              این وبسایت دارای نماد اعتماد الکترونیکی از وزارت بازرگانی می باشد.
              <br /> محترم جهت دریافت پنل همکاری با ما تماس حاصل فرمایید.
              <br />قیمت کالاها در این وبسایت نسبت به میزان خرید شما متغیر می باشد.
              تایید تلفن همراه و تلفن ثابت در این وبسایت الزامی میباشد.
              خواهشمند است در انتخاب کالا دقت فرمایید؛ کد تحویل داده شده تعویض ویا مرجوع نمی گردد.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3"> <i class="bi bi-award-fill icon"></i>
          <h6>تمامی حقوق برای حامد غفاری محفوظ می باشد</h6>
        </div>
        <div class="col-md-3">
          <h5> خدمات</h5><br />
          <a class="section-a-3  text-muted" href="#"> پرشین گیفت کارت</a> <br />
          <a class="section-a-3  text-muted" href="#"> خرید یوسی   </a> <br />
          <a class="section-a-3  text-muted" href=""> خرید سی پی کالاف دیوتی</a><br />
          <a class="section-a-3  text-muted" href="">خرید جم و سکه بازی</a> < br />
          <a class="section-a-3  text-muted" href="">خرید جم و سکه بازی</a>

        </div>
        <div class="col-md-3">
          <h5> خدمات</h5><br />
          <a class="section-a-3  text-muted" href="#"> پرشین گیفت کارت</a> <br />
          <a class="section-a-3  text-muted" href="#"> خرید یوسی   </a> <br />
          <a class="section-a-3  text-muted" href=""> خرید سی پی کالاف دیوتی</a><br />
          <a class="section-a-3  text-muted" href="">خرید جم و سکه بازی</a> <br />
          <a class="section-a-3  text-muted" href="">خرید جم و سکه بازی</a>

        </div>
        <div class="col-md-3">
          <img class="img-fluid rounded float-start" width="150px" src="./image/topimg.png" alt="" />
          <i class="icon bi bi-person"> </i> <p><br /> خرید گیفت کارت اپلیکیشن و برنامه </p>
        </div>
      </div>
    </div>
  </footer>


    </div>
  )
}

export default Foter
