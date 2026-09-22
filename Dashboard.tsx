use client';

import { useMemo, useState } from "react";
import { Bell, ChevronDown, Database, RefreshCw, Search, ShieldCheck } from "lucide-react";

const campaigns = [
  ["UrbanFit — Prospecting", "Active", "Sales", "₫12.4M", "₫9.8M", "2.94x", "4.1%", "AI cần xử lý"],
  ["Nexa Academy — Lead Gen", "Active", "Leads", "₫8.2M", "₫7.4M", "3.51x", "5.8%", "Ổn định"],
  ["UrbanFit — Retargeting", "Paused", "Sales", "₫5.1M", "₫4.9M", "2.21x", "2.7%", "CPA tăng"],
  ["Client C — Conversion", "Active", "Sales", "₫15.6M", "₫18.2M", "4.08x", "6.3%", "Ổn định"]
];

export default function Dashboard(){
  const [section,setSection]=useState("Tổng quan");
  const [spend,setSpend]=useState(1000000);
  const [revenue,setRevenue]=useState(3200000);
  const [orders,setOrders]=useState(28);
  const [synced,setSynced]=useState(false);

  const roas = useMemo(()=>spend>0?revenue/spend:0,[spend,revenue]);
  const cpa = useMemo(()=>orders>0?spend/orders:0,[spend,orders]);

  return <div className="app">
    <aside className="sidebar">
      <div className="brand"><b>ADPILOT AI</b><span>Advertising Intelligence Platform</span></div>
      <div className="nav">
        {["Tổng quan","Tài khoản","Chiến dịch","Nhóm quảng cáo","Quảng cáo","Sản phẩm","Creative","Phân tích AI","Chẩn đoán","Cảnh báo","A/B Testing","Profit Analytics","Báo cáo","Integrations","Settings"].map(x=>
          <button key={x} className={section===x?"active":""} onClick={()=>setSection(x)}>{x}</button>
        )}
      </div>
      <div className="section">Agency Workspace</div>
      <div className="nav">
        <button>Aurora Performance</button><button>UrbanFit</button><button>Nexa Academy</button>
      </div>
      <div className="bottom"><ShieldCheck size={12} style={{verticalAlign:"-2px"}}/> Data protected<br/><br/>Admin · Owner</div>
    </aside>

    <main className="main">
      <header className="topbar">
        <div className="search"><Search size={13} style={{verticalAlign:"-2px",marginRight:7}}/> Tìm khách hàng, tài khoản...</div>
        <span className="pill">Aurora Performance <ChevronDown size={11} style={{verticalAlign:"-2px"}}/></span>
        <span className="pill connected">● Meta Ads đã kết nối</span>
        <button className="btn" onClick={()=>setSynced(true)}><RefreshCw size={12} style={{verticalAlign:"-2px",marginRight:5}}/> {synced?"Đã đồng bộ":"Sync"}</button>
        <Bell size={16}/>
      </header>

      <div className="page">
        <div className="heading">
          <div><h1>{section==="Tổng quan"?"Hiệu quả quảng cáo toàn agency":section}</h1><p>Theo dõi sức khỏe tài khoản, phát hiện vấn đề và ưu tiên hành động.</p></div>
          <div className="actions"><button className="btn">7 ngày qua</button><button className="btn">Xuất báo cáo</button></div>
        </div>

        <div className="demo"><Database size={14}/> <b>DATA DEMO</b> · Đây là dữ liệu mô phỏng để chạy thử. Chưa kết nối dữ liệu khách hàng thực.</div>

        <section className="grid8">
          {[
            ["Tổng chi tiêu","₫41.3M","↓ 8.2%",""],
            ["Doanh thu / GMV","₫49.7M","↑ 6.4%",""],
            ["Đơn hàng","286","↑ 11.7%",""],
            ["ROAS","3.54x","↓ 9.2%","bad"],
            ["CPA","₫144.4K","↑ 4.8%","bad"],
            ["CTR","3.82%","↓ 0.7%","bad"],
            ["CPC","₫2.91K","↑ 6.1%","bad"],
            ["CPM","₫111K","↑ 3.4%","bad"]
          ].map(k=><div className="card kpi" key={k[0]}><div className="label">{k[0]}</div><div className="value">{k[1]}</div><div className={"delta "+k[3]}>{k[2]} so với kỳ trước</div></div>)}
        </section>

        <div className="contentgrid">
          <div className="card">
            <h2>Performance trend · 7 ngày</h2>
            <div className="chart">{[42,57,48,73,64,82,69,92,75,87,71,95].map((h,i)=><div className="bar" style={{height:h+"%"}} key={i}/>)}</div>
            <div className="chartlabels"><span>16/09</span><span>18/09</span><span>20/09</span><span>22/09</span></div>
          </div>
          <div className="card">
            <h2>AI Diagnosis · Ưu tiên xử lý</h2>
            <div className="insight"><span className="tag">HIGH · DATA DEMO</span><h3>ROAS giảm 19%</h3><p>CTR giảm và CPC tăng trong cùng comparison window. Dữ liệu phù hợp với giả thuyết traffic efficiency suy giảm.</p><div className="metricline"><span>CTR <b>0.88%</b></span><span>CPC <b>+19%</b></span><span>Confidence <b>Medium</b></span></div></div>
            <div className="insight"><span className="tag" style={{color:"#9a6700"}}>MEDIUM · DATA DEMO</span><h3>CPA tăng 38%</h3><p>Kiểm tra creative có CTR thấp trước khi thay đổi campaign-level settings.</p><div className="metricline"><span>CPA <b>+38%</b></span><span>Frequency <b>4.7</b></span></div></div>
          </div>
        </div>

        <div className="card tablecard">
          <h2>Campaign Performance</h2>
          <div className="tablewrap"><table><thead><tr><th>Campaign</th><th>Status</th><th>Objective</th><th>Budget</th><th>Spend</th><th>ROAS</th><th>CTR</th><th>AI Status</th></tr></thead>
          <tbody>{campaigns.map(c=><tr key={c[0]}><td><b>{c[0]}</b></td><td><span className="status">{c[1]}</span></td><td>{c[2]}</td><td>{c[3]}</td><td>{c[4]}</td><td>{c[5]}</td><td>{c[6]}</td><td><span className="ai">{c[7]}</span></td></tr>)}</tbody></table></div>
        </div>

        <div className="card demoSection">
          <h2>Interactive AI Demo — phân tích chỉ số</h2>
          <div className="formgrid">
            <Field label="Spend (VNĐ)" value={spend} setValue={setSpend}/>
            <Field label="Revenue (VNĐ)" value={revenue} setValue={setRevenue}/>
            <Field label="Orders" value={orders} setValue={setOrders}/>
            <div className="field"><label>ROAS</label><div className="result" style={{margin:0}}><b>{roas.toFixed(2)}x</b></div></div>
          </div>
          <div className="result"><b>Demo analysis — not connected to your advertising account.</b><br/>
          Evidence: Spend {spend.toLocaleString("vi-VN")} · Revenue {revenue.toLocaleString("vi-VN")} · Orders {orders}. Derived ROAS = Revenue / Spend = {roas.toFixed(2)}x; CPA = Spend / Orders = {cpa.toLocaleString("vi-VN",{maximumFractionDigits:0})} VNĐ. Đây là phép tính demo, không phải kết luận về tài khoản quảng cáo thực.</div>
        </div>
        <div className="footer">ADPILOT AI · From Ad Data to Better Decisions. Demo build · Production integrations pending credentials / permissions.</div>
      </div>
    </main>
  </div>
}

function Field({label,value,setValue}:{label:string,value:number,setValue:(n:number)=>void}){
  return <div className="field"><label>{label}</label><input type="number" value={value} onChange={e=>setValue(Number(e.target.value)||0)}/></div>
}